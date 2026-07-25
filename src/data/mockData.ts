import { Product, Solution, Article, CoreValue } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'nhung-huou-tuoi',
    name: 'Nhung Hươu Tươi',
    subtitle: 'Nhung hươu nguyên cặp chọn lọc từ trang trại chuẩn sinh thái',
    category: 'raw',
    description: 'Trực tiếp từ trang trại, giữ nguyên độ tươi và hàm lượng khoáng chất tối đa cho người dùng.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMIx9tIIErJCnWqs1YUNqrSzRx5T2f2XXxtuLnVYE2CWVEchaMkc9m4PXlNTT6__3ntJUBdp56azLzBbmbNq1ymvI3klTPp3no5JdzaQvm3GmQmkApPk6xDuJLI5gabUuEbFeOkkLF2i44Y_Xuns98tEu-ZPskH9khikgEhJZjVqNw861Mvn6c1mwO3CX2h4YOUDrDKVI-J154xPTz5yLVkIyF51vmgqW1IYzU2__s41zGXr183sC3d9dar-UbIF518smo7qNgKS4',
    badge: 'FRESH HARVEST',
    features: [
      'Tuyển chọn từ hươu đực 3-5 tuổi khỏe mạnh',
      'Độ tươi giữ nguyên 100% nhờ đóng gói chân không lạnh',
      'Giàu IGF-1, collagen, glucosamine và hơn 25 axit amin',
      'Minh bạch mã định danh trang trại thu hoạch'
    ],
    usageInstructions: 'Sử dụng ngâm rượu thảo dược, thái lát mỏng nấu cháo hầm sâm, hoặc hấp mật ong nguyên chất.',
    dosage: '2 - 5g mỗi ngày cho người trưởng thành',
    origin: 'Trang trại sinh thái Hương Sơn - Hà Tĩnh',
    featured: true
  },
  {
    id: 'ruou-nhung-tinh-tuy',
    name: 'Rượu Nhung Tinh Túy',
    subtitle: 'Hương vị cổ truyền hòa quyện thảo dược bí truyền',
    category: 'processed',
    description: 'Kết hợp các loại thảo dược quý hiếm, ủ theo công thức bí truyền lâu đời đạt độ hoàn mỹ cao.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1H_cCLsJQhRwRjEa-Bbn2gR0CyO4UCb4NsDEoCfbt5rcOYj_LubgbnOAT_R0ZZz91M9cAxNwk9h1RgadmWtOkB-Iz1ROqe6deFsaAXeHHuXFJB8wigKM41uaslh0nV2n6Q8iBJI79Vvv7LS0yIYvca8xK9sYIbjZqnpXJtAlwOO6KQibujZTaCn3hzIipR7AOC9Sqfhn4sGCzEWZeE35jwGGL1tWic6-vLDTGgdCZBLFpMI6GkNwnBBQRsVLMpM6tsQ_IBBbmldQ',
    badge: 'HERITAGE RECIPE',
    features: [
      'Ủ lạnh trong hầm đá tảng 180 ngày',
      'Kết hợp nhung hươu tươi, đông trùng hạ thảo & nhân sâm',
      'Hương vị êm dịu, không gắt, bổ sung sinh lực',
      'Chai thủy tinh cao cấp khắc họa tiết di sản'
    ],
    usageInstructions: 'Dùng trực tiếp trước bữa ăn tối hoặc trước khi đi ngủ.',
    dosage: '15 - 30ml (1 ly nhỏ) mỗi ngày',
    origin: 'Xưởng ủ men di sản VĐ VIỆT',
    featured: true
  },
  {
    id: 'bot-say-thang-hoa',
    name: 'Bột Sấy Thăng Hoa',
    subtitle: 'Công nghệ nano giữ trọn 99% dược chất tự nhiên',
    category: 'supplement',
    description: 'Tiện lợi cho việc sử dụng hàng ngày, dễ dàng hòa tan và hấp thụ nhanh chóng vào cơ thể.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSJWCWit_T6-OgRvDAUiNcP58SlWJagM07zAMO0YoRaH2cq2tDdNlWNng2uPMc27_5mD0K7jwB3IeQUOuiiFkKs2FMk2GJFmaOdtFtO8IowKMSjW5M-6Mk7iTqVnWRTyqOicEXKu3z2CyToGAVG86QWi8n-Y8IVzHECR-CVlAalmfCwOWNz2p3X8xl1XjRdvcAu7cq4d4dEdaLof3uCo9fyTgJGuwureRavJcJuWNe_Gf9-jbOpHkbX-tfB1C0wj8UcNpDJja1xcU',
    badge: 'FREEZE-DRIED TECH',
    features: [
      'Sấy thăng hoa nhiệt độ âm -40°C',
      'Kích thước hạt siêu mịn chuẩn nano dễ hòa tan',
      'Đóng lọ thủy tinh vô trùng bảo quản lâu dài',
      'Không chất bảo quản hay phụ gia nhân tạo'
    ],
    usageInstructions: 'Pha trực tiếp với nước ấm 50°C, sữa tươi, cháo ấm hoặc ngâm cùng mật ong.',
    dosage: '1 - 2g/ngày (khoảng 1 thìa gạt đi kèm)',
    origin: 'Viện Công Nghệ Sấy Thăng Hoa VĐ VIỆT',
    featured: true
  },
  {
    id: 'royal-velvet-essence',
    name: 'Royal Velvet Essence',
    subtitle: 'Tinh chất nhung hươu hoàng gia cô đặc cao cấp',
    category: 'heritage',
    description: 'Chiết xuất từ những cặp nhung đạt tiêu chuẩn Thượng hạng, giàu peptit sinh học cải thiện sức bền và hồi phục thể lực nhanh chóng.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU9iuywTxVeemsCUIlfrUkrTennirYLpGmiYtu1LDFVb83-AZlhL5OnjCEKqE8iN6w99v3pyEkzby0uv5a7jMRaoon6vxKg-8vSzwQVV1y6Pa2YXdTxbzDxDZNyJkjAPRcsHyRKGPRWWXiZz71JmdNlDHbE-TWnhLcoFA1UwORzuljhi22OSlXx3F56wpkS3COajv1hPSfEoxBeFms-u_f7VvQ_p9s-Ec9SBMoSEQ7-F2j8VJWAIb9hKFThQL1DIGP2LD13YjZIz0',
    badge: 'ROYAL COLLECTION',
    features: [
      'Chiết xuất thủy phân enzym thế hệ mới',
      'Tỷ lệ cô đặc 10:1 cho sinh dược khả dụng tối đa',
      'Hộp quà sơn mài đính họa tiết dát vàng 24K',
      'Kèm chứng nhận truy xuất nguồn gốc DNA'
    ],
    usageInstructions: 'Uống trực tiếp từng ống hoặc pha cùng nước ấm buổi sáng.',
    dosage: '1 ống 10ml mỗi ngày',
    origin: 'Phòng Lab R&D Dược Liệu Cao Cấp',
    featured: false
  },
  {
    id: 'heritage-gold-oil',
    name: 'Heritage Gold Oil',
    subtitle: 'Dầu tinh chất nhung hươu & thảo mộc cao nguyên',
    category: 'heritage',
    description: 'Sự kết hợp hoàn hảo giữa chiết xuất nhung hươu tươi và tinh dầu thảo dược rừng nguyên sinh, hỗ trợ dưỡng thể và chăm sóc chuyên sâu.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVnwpUe3y5epit6D3xLObAAnLtzZPjMVrkNiSnc9QS9tPU0KsCuxyZ9eL_4f4k2hPwzgu62d3t_tEKdkFXGAbQQcyDyv3Lug1cpkpQwpFFLBKRjJHlOdVN5eAWil_THylswpTadXqfFEAw2FmcYcQu1OSvDcBu2psGV77PVuBxldav4nrJc3UEXlc25aE4737gj-j5TIsSOYl5wq7fwSEMnsBfbNnaDvH5gdr3B_HPB-iwB978ldtxR-imrUF3TR5-nA-mGkqzlcc',
    badge: 'HERITAGE GOLD',
    features: [
      'Công thức ép lạnh giữ nguyên dinh dưỡng',
      'Thấm nhanh qua da, không gây bết dính',
      'Thành phần thiên nhiên 100% không paraben',
      'Hương thơm dịu nhẹ từ quế chi và hoắc hương'
    ],
    usageInstructions: 'Thoa trực tiếp lên da hoặc vùng cơ mỏi, massage nhẹ nhàng.',
    dosage: '3 - 5 giọt mỗi lần sử dụng',
    origin: 'VĐ VIỆT Heritage Reserve',
    featured: false
  },
  {
    id: 'pure-velvet-powder',
    name: 'Pure Velvet Powder Gold',
    subtitle: 'Bột nhung hươu nguyên chất hạ tinh cao cấp',
    category: 'heritage',
    description: 'Nguyên bản và tinh khiết, gìn giữ trọn vẹn nét đẹp y học cổ truyền Việt Nam qua lăng kính sản xuất công nghệ cao.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZp93AjpIiz0yMKRscLOkYfzRLVKThjZh85PwfLW8ywvTEmL8N9EjaziFOemZF2FCFLOflTnwD5f1mIG13VikeaWRs2qlVATxq86wiGz930NvYcSQorulGgHMEVB7qcl2VWtXsYd1sXiivp8r_oRl5hpZ5VsjJqaKLuf3Ba7ZaL_DcRvYKJ8G2XnIKfkMLbwArCImmqJ1wrdndyu2MkwdLDQ1Uu_JakvgyXkClSVBRuvP12Rpesz_m67O5n72a2wEEyuCmt9jvo-o',
    badge: 'ANCIENT POWDER',
    features: [
      'Mịn màng tinh xảo, tán nhuyễn nhiệt độ thấp',
      'Đóng hũ gốm sứ thủ công chống tia UV',
      'Phù hợp làm quà tặng biếu cấp cao',
      'Pha được cả nước sôi lẫn đồ uống sinh tố'
    ],
    usageInstructions: 'Dùng thìa gỗ đi kèm lấy bột pha cùng nước ấm hoặc mật ong rừng.',
    dosage: '1.5g mỗi ngày',
    origin: 'Cơ sở sản xuất Bảo Tồn Di Sản',
    featured: false
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'dao-tao-ky-thuat',
    title: 'Đào tạo Kỹ thuật Chăn nuôi',
    subtitle: 'Chuyển giao công nghệ chăm sóc hươu tiêu chuẩn quốc tế',
    targetAudience: 'DÀNH CHO ĐỐI TÁC TRANG TRẠI',
    description: 'Chuyển giao công nghệ chăm sóc hươu tiêu chuẩn quốc tế và quy trình thu hoạch an toàn, bảo đảm động vật được đối xử nhân đạo và đạt sản lượng tối ưu.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCezA-1aNtb55lLWNf-ukponHI4w3RBYu3w-O-ed5EtjhPkjen2Pq2scA-dPBts4lwRZNU5DBJjhRudpqOeTolfRpEWWKXLpRyBkkLlISB9-lhN5QQOJ1BqShMo092wofwJCYiTDPY4k3iKtt8NbaltfGdIKt1Ovk-lhXJ0d0p9SSuraihErhOBAfafJjsxflvy31RQ4q9rGHSo9AHNeLPHT9MIYqBMftxmNU2ZQ1AC1okMIbkF5W_D55T-bNHga5DkVVzD02aFFDQ',
    features: [
      'Giáo trình tiêu chuẩn Châu Âu điều chỉnh theo khí hậu Việt Nam',
      'Kỹ thuật cắt nhung nhân đạo không gây đau rát hay tổn thương hươu',
      'Chế độ dinh dưỡng cỏ tươi phối trộn vi sinh đặc biệt',
      'Hỗ trợ bác sĩ thú y đồng hành 24/7 trực tiếp tại trang trại'
    ],
    roiStat: 'Tăng 25% tỷ lệ nhung loại 1',
    ctaText: 'Đăng ký nhận tài liệu đào tạo'
  },
  {
    id: 'phat-trien-trang-trai',
    title: 'Phát triển Trang trại Thông minh 4.0',
    subtitle: 'Giải pháp tổng thể tự động hóa cho quy mô hiện đại',
    targetAudience: 'GIẢI PHÁP TỔNG THỂ',
    description: 'Xây dựng hệ thống quản trị 4.0 với cảm biến IoT sinh học, camera AI theo dõi sức khỏe từng cá thể và phần mềm tự động điều phối khẩu phần ăn.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnt0bEKAwrEClOKBkmpJgWqNPMZyFl4KD9ZZnFGdPszbijZUBNBFDSTI8O_wzntZUN_YZ-bFbJfLu0KTCbmszIpVRjbBw-NjV1qcPezUkT2fiaGUMKecBWSSr99UDCA0R4khGeY_6XQ31s3IwhmZ-eEc_oBoMG-2URVUpTSqEefXcivka5JxYvrKIOaoAazZ-OmNbOJsneFSmh7Pp4fkI6-e1FFQFUyI87Sh09Od9HqDydmiiBGJ9s8_hF4hfIUGNjWigtCwyxUYo',
    features: [
      'Giám sát nhiệt độ, độ ẩm & chỉ số nhịp tim hươu từ xa',
      'Dự báo chính xác thời điểm nhung đạt đỉnh dinh dưỡng',
      'Hệ thống tự động xử lý chất thải sinh học bảo vệ môi trường',
      'Phần mềm Dashboard quản lý doanh thu & xuất kho tích hợp'
    ],
    roiStat: 'Tối ưu 30% chi phí vận hành',
    ctaText: 'Tư vấn giải pháp Smart Farm'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'quy-trinh-chiet-xuat-iso',
    title: 'Quy trình chiết xuất mới đạt tiêu chuẩn ISO quốc tế',
    category: 'CÔNG NGHỆ MỚI',
    date: '24 Tháng 5, 2024',
    readTime: '8 phút đọc',
    excerpt: 'Việc áp dụng công nghệ lọc nano và sấy thăng hoa nhiệt độ âm giúp tăng cường độ tinh khiết của dịch chiết nhung hươu vượt bậc, giữ nguyên tính toàn vẹn của các peptit sinh học.',
    content: `Việc áp dụng công nghệ lọc nano tiên tiến và quy trình phân tách phân tử nhiệt độ thấp tại nhà máy VĐ VIỆT đã tạo ra bước ngoặt trong ngành chế biến dược liệu. 

Bằng cách loại bỏ hoàn toàn tạp chất mà không làm gãy chuỗi protein nhạy cảm, dịch chiết nhung hươu VĐ VIỆT đạt chứng nhận ISO 22000 và tiêu chuẩn GMP quốc tế.

Các thử nghiệm lâm sàng độc lập cho thấy hàm lượng IGF-1 (nhân tố tăng trưởng tương tự insulin) được bảo tồn lên đến 99.2% so với nhung tươi nguyên bản.`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUkE4nPGyvqM2ih-h1LlM42mh41gWyn6zmZkO_LqG0DpvDuBkCyTE1WtIb3-SzHz_EOfpzPXU8ng_ujiMW9Zz8Yfsen1vO9rcoOPnKTc-e5OB8zWp3XX8AUnxyk69tbW0ARNVpBzoVHOwlqDfFl0cSBb7LU-8_J-vXkaOAC94WdWayS33dRgLx8gTaFOhVTdRwoSKSEFlAMO8G_Md__Dld-yUQHivGaXIyVXCljKxcT0qGHHqWPhVTZv19UNaaKDICVtb3CS-A7kc',
    featured: true
  },
  {
    id: 'vietdz-trien-lam-nong-nghiep-2024',
    title: 'VĐ VIỆT tại triển lãm Nông nghiệp Công nghệ cao 2024',
    category: 'SỰ KIỆN',
    date: '12 Tháng 5, 2024',
    readTime: '5 phút đọc',
    excerpt: 'Gây ấn tượng mạnh với các giải pháp trang trại thông minh và bộ sản phẩm nhung hươu cao cấp, VĐ VIỆT thu hút hơn 5,000 lượt khách tham quan và đối tác thương thảo.',
    content: `Gian hàng triển lãm của VĐ VIỆT tại Triển lãm Nông nghiệp Công nghệ cao Quốc tế 2024 đã trở thành tâm điểm thu hút giới chuyên gia và doanh nghiệp.

Tại đây, mô hình thu nhỏ trang trại hươu 4.0 tích hợp trí tuệ nhân tạo AI cùng bộ sưu tập nhung hươu sấy thăng hoa đã nhận được sự đánh giá rất cao từ Bộ Nông nghiệp & Phát triển Nông thôn.`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB47UmidCwjjqC_P1V-27VLa1l6YlEdrxGgiWQglY4TglZ6zrxfDFBesFrNpnaSphzOF44eAbkJimfDIiCfFI6TM5nTK-7-Zna52M9cdbjj5Y5NlGV9mGquNq7C114o9vFu4PkE7y2-GkJF9bKQbsz0MQjVIZcUqMYSDQcx1KaiFzPnjBlfHUGu00GgbMFjiren_U0UKCf_0Z6GFo7-3NllM-CTqVz31DAItcDzmTnfn3cQVrGUf80EELC0CeVBtUbW08gfj5HWm5c',
    featured: false
  },
  {
    id: 'meo-su-dung-bot-nhung-huou',
    title: 'Mẹo sử dụng bột nhung hươu để tăng cường sức đề kháng',
    category: 'SỨC KHỎE',
    date: '05 Tháng 5, 2024',
    readTime: '6 phút đọc',
    excerpt: 'Chuyên gia dinh dưỡng chia sẻ 5 cách kết hợp bột nhung hươu vào thực đơn hàng ngày cực hiệu quả cho người lớn tuổi, vận động viên và người mới ốm dậy.',
    content: `Bột nhung hươu sấy thăng hoa là dạng dược liệu cực kỳ dễ hấp thụ nếu biết kết hợp đúng cách. 

1. Pha chế cùng mật ong rừng và nước ấm 50°C vào buổi sáng sớm.
2. Rắc trực tiếp lên bát cháo yến mạch hoặc cháo gà ấm.
3. Trộn vào sinh tố hoa quả nguyên chất giúp tăng cường năng lượng tập luyện.
4. Ngâm cùng sữa chua không đường làm bữa phụ dinh dưỡng.
5. Dùng làm nguyên liệu hầm canh đông y cao cấp.`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-HU2GlGEvA0r7aW6QMRB_6rkxWXjEjgKmVKYFMqFW157hOAgCEI9C_INFTT46gy5jHVlZFR6bPVeYu8Hk6NCfnpAg8M24hy59txi9epqrUPV8RFHJiC5Om9BYTn-jK8hMV2CCrKsSKdQ_RoeYPYdlEXYSyIerTxSBEapAf6Icefr2UtmFJP0ytHF15DS40N-tQrtROo4SPIhDl3anS4PEZjhhsmZzAEvsAnkBlbXqyBKL0x72S4RTQ33XpAPxpf46YTPtDtkxuVc',
    featured: false
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'chat-luong',
    title: 'Chất lượng Thượng hạng',
    description: 'Tuyển chọn nghiêm ngặt từ những cá thể hươu khỏe mạnh nhất trong hệ sinh thái đạt chuẩn.',
    iconName: 'ShieldCheck',
    colorClass: 'text-primary bg-primary/10'
  },
  {
    id: 'cong-nghe',
    title: 'Công nghệ Tiên phong',
    description: 'Quy trình sấy thăng hoa giữ trọn 99% dưỡng chất quý giá và peptit sinh học nhạy cảm.',
    iconName: 'Cpu',
    colorClass: 'text-tertiary bg-tertiary/10'
  },
  {
    id: 'ben-vung',
    title: 'Bền vững & Nhân văn',
    description: 'Quy trình chăn nuôi nhân đạo, quy trình cắt nhung an toàn, hài hòa cùng thiên nhiên.',
    iconName: 'Leaf',
    colorClass: 'text-secondary bg-secondary/10'
  }
];
