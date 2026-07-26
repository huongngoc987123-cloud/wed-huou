import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phone, email, partnerType, productInterest, message } = body;

    // Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0) {
      return NextResponse.json(
        { error: 'Họ và tên không được để trống.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
      return NextResponse.json(
        { error: 'Số điện thoại không được để trống.' },
        { status: 400 }
      );
    }

    if (!partnerType || typeof partnerType !== 'string') {
      return NextResponse.json(
        { error: 'Đối tượng liên hệ không hợp lệ.' },
        { status: 400 }
      );
    }

    const validPartnerTypes = ['consumer', 'farm_partner', 'distributor', 'investor'];
    if (!validPartnerTypes.includes(partnerType)) {
      return NextResponse.json(
        { error: 'Đối tượng liên hệ không hợp lệ.' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        partnerType,
        productInterest: productInterest?.trim() || null,
        message: message?.trim() || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: contact.id,
          fullName: contact.fullName,
          phone: contact.phone,
          createdAt: contact.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
