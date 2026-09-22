import React from 'react';
import { ExternalLink, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function HarvardResume({
  fontFamily = 'times',
  fontSize = 'normal',
  lang = 'en',
  activeFilter = 'all',
  onSelectProject
}) {
  const isVi = lang === 'vi';

  // Determine font family CSS class
  const getFontClass = () => {
    switch (fontFamily) {
      case 'georgia':
        return 'font-georgia';
      case 'inter':
        return 'font-inter';
      case 'times':
      default:
        return 'font-times';
    }
  };

  // Determine font size CSS class (wider and larger)
  const getSizeStyles = () => {
    switch (fontSize) {
      case 'small':
        return {
          titleSize: 'text-2xl sm:text-3xl md:text-4xl',
          sectionHeading: 'text-xs sm:text-[13.5px]',
          bodySize: 'text-[12px] sm:text-[12.5px]',
          lineHeight: 'leading-normal',
          padding: 'p-4 sm:p-8 md:p-12'
        };
      case 'large':
        return {
          titleSize: 'text-2xl sm:text-4xl md:text-5xl',
          sectionHeading: 'text-sm sm:text-base',
          bodySize: 'text-[13px] sm:text-[15.5px]',
          lineHeight: 'leading-relaxed',
          padding: 'p-5 sm:p-12 md:p-16'
        };
      case 'normal':
      default:
        return {
          titleSize: 'text-2xl sm:text-4xl md:text-[40px]',
          sectionHeading: 'text-sm sm:text-[15px]',
          bodySize: 'text-[12.5px] sm:text-[14px]',
          lineHeight: 'leading-relaxed',
          padding: 'p-4 sm:p-10 md:p-16'
        };
    }
  };

  const currentSize = getSizeStyles();

  // Accurate Match Checker for Recruiter Lens
  const matchesFilter = (categories) => {
    if (activeFilter === 'all') return false;
    return categories.includes(activeFilter);
  };

  const getSpotlightClass = (categories) => {
    if (activeFilter === 'all') return '';
    if (matchesFilter(categories)) {
      return 'bg-blue-50/80 border-l-4 border-blue-600 pl-3.5 py-2 -ml-3.5 rounded-r-xl transition-all shadow-xs';
    }
    return 'opacity-50 transition-opacity';
  };

  const getMatchedBadge = (categories, label) => {
    if (activeFilter === 'all' || !matchesFilter(categories)) return null;
    return (
      <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-md text-[10.5px] font-mono font-bold bg-blue-600 text-white shadow-xs">
        <Sparkles className="w-2.5 h-2.5" />
        {label || 'Match'}
      </span>
    );
  };

  const projectsData = [
    {
      id: 'foodecom',
      title: 'FoodEcom AI Review Platform',
      period: '9/2024 – 12/2024',
      categories: ['frontend', 'backend', 'ai'],
      github: 'https://github.com/quangson140302/mern-ecommerce',
      description: isVi
        ? 'Dự án phát triển nền tảng thương mại điện tử chuyên biệt ngành thực phẩm, tích hợp hệ thống phân tích đánh giá người dùng thông minh bằng thuật toán học máy Naive Bayes để phân loại cảm xúc (Tích cực, Tiêu cực, Trung tính) nhằm nâng cao trải nghiệm mua sắm.'
        : 'The project involves developing an e-commerce platform specializing in food products, integrated with an intelligent feedback system that classifies user reviews into categories such as positive, negative, and neutral to enhance the shopping experience.',
      contributions: isVi ? [
        'Thiết kế và phát triển giao diện người dùng mượt mà, chuẩn responsive bằng ReactJS và TailwindCSS.',
        'Xây dựng hệ thống RESTful API backend bằng Node.js và ExpressJS quản lý danh mục sản phẩm, giỏ hàng, đơn hàng và tài khoản người dùng.',
        'Thiết kế và tối ưu cấu trúc cơ sở dữ liệu MongoDB phục vụ lưu trữ và truy vấn dữ liệu hiệu năng cao.',
        'Triển khai thuật toán học máy Naive Bayes để phân loại sắc thái bình luận của khách hàng theo thời gian thực.',
        'Tích hợp xác thực và phân quyền người dùng bảo mật thông qua JSON Web Token (JWT).',
        'Tối ưu hóa hiệu năng kết xuất (rendering performance) cho khối dữ liệu đánh giá sản phẩm.'
      ] : [
        'Designed and developed a user-friendly interface using ReactJS and TailwindCSS.',
        'Built a RESTful backend using Node.js and ExpressJS to manage products, shopping carts, users, and orders.',
        'Integrated MongoDB as the primary database to store product, user, and review data.',
        'Applied the Naive Bayes algorithm to classify user feedback based on comment content.',
        'Implemented JWT for secure user authentication and authorization.',
        'Optimized review display performance to improve overall user experience.'
      ],
      technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'TailwindCSS', 'JWT', 'Naive Bayes']
    },
    {
      id: 'waste',
      title: 'WASTE-CLASSIFICATION',
      period: '12/2023 – 03/2024',
      categories: ['ai', 'frontend'],
      github: 'https://github.com/quangson140302/waste-classification',
      description: isVi
        ? 'Dự án ứng dụng di động đa nền tảng xây dựng bằng React Native và Expo Go, cho phép người dùng chụp ảnh rác thải để hệ thống nhận diện và phân loại chủng loại tức thì bằng thị giác máy tính tích hợp ở backend Python, đóng gói triển khai tinh gọn qua Docker.'
        : 'The waste classification project is a mobile application built using React Native and Expo Go, allowing users to take pictures of waste and identify its type through integrated image recognition technology. The backend of the application is deployed using Python. The project utilizes Docker for easy and flexible packaging and deployment. The goal of the project is to provide a convenient tool for waste identification and enhance awareness of waste classification and environmental protection.',
      contributions: isVi ? [
        'Phát triển ứng dụng di động React Native và TypeScript, tích hợp mô-đun máy ảnh thông qua bộ công cụ Expo Go.',
        'Tích hợp pipeline xử lý ảnh với backend Python, phục vụ nhận diện chính xác các nhóm rác thải từ hình ảnh chụp thực tế.',
        'Đóng gói container hoá toàn bộ môi trường frontend và backend bằng Docker, đảm bảo tính đồng nhất khi triển khai.',
        'Phối hợp chặt chẽ cùng các thành viên trong nhóm để tinh chỉnh, nâng cấp tính năng dựa trên phản hồi thực tế.',
        'Góp phần nâng cao ý thức phân loại rác tại nguồn và bảo vệ môi trường thông qua giải pháp công nghệ tiện ích.'
      ] : [
        'Developed a user-friendly mobile application using React Native and Expo Go to enable users to capture images of waste and classify them efficiently.',
        'Integrated image recognition technology into the app\'s backend using Python, allowing for accurate identification of waste types from the images captured.',
        'Utilized Docker for streamlined packaging and deployment of both frontend and backend components, ensuring consistency and ease of management across different environments.',
        'Collaborated closely with team members to continuously refine and improve the application\'s features and functionality based on user feedback and evolving requirements.',
        'Contributed to raising awareness of waste classification and environmental protection by providing a practical tool for users to engage in responsible waste management practices.'
      ],
      technologies: ['React Native', 'Python', 'Expo Go', 'Docker', 'TypeScript', 'Computer Vision']
    },
    {
      id: 'mathgenie',
      title: 'MathGenieAssistant',
      period: '08/2023 – 12/2023',
      categories: ['ai', 'frontend', 'backend'],
      github: 'https://github.com/quangson140302/MathGenieAssistant',
      description: isVi
        ? 'MathGenieAssistant là dự án trợ lý ảo chatbot thông minh phát triển trên nền tảng Rasa NLP, hỗ trợ người dùng giải đáp các thắc mắc và bài toán chuyên sâu về môn Toán Rời Rạc và nền tảng Khoa học máy tính.'
        : 'MathGenieAssistant is a project I actively contributed to in its development. The project aims to build an intelligent chatbot capable of answering questions related to discrete mathematics, and other related fields.',
      contributions: isVi ? [
        'Đảm nhiệm phát triển mô-đun NLP cốt lõi và huấn luyện nhận diện ý định (intent recognition) bằng framework Rasa.',
        'Thiết kế và lập trình giao diện hội thoại thân thiện, thẩm mỹ cao bằng React.js và Ant Design (antd).',
        'Xây dựng tầng middleware backend bằng Node.js để quản lý session người dùng và điều phối giao tiếp với Rasa bot.',
        'Triển khai xác thực người dùng an toàn bằng JSON Web Token (JWT), bảo mật lịch sử hội thoại trên MongoDB.',
        'Tiến hành kiểm thử nghiêm ngặt để tối ưu hóa độ chính xác của chatbot khi giải các bài toán toán rời rạc.',
        'Soạn thảo tài liệu kiến trúc hệ thống chi tiết, phục vụ bàn giao và mở rộng dự án lâu dài.'
      ] : [
        'Bot Development: Led development efforts in building core functionalities using Rasa, focusing on natural language processing (NLP) for accurate query responses.',
        'Frontend Design: Contributed to designing and implementing a user-friendly interface with React.js and Ant Design (antd), enhancing overall user experience.',
        'Backend Logic: Developed backend logic in Node.js to manage user requests and ensure seamless communication with the Rasa chatbot.',
        'Integration of JWT: Implemented JSON Web Tokens (JWT) for user authentication, ensuring data security and privacy during interactions.',
        'Testing and Optimization: Conducted rigorous testing to identify and address bugs, optimizing the bot\'s performance and accuracy in answering discrete math queries.',
        'Documentation: Prepared detailed documentation for project architecture and usage, facilitating smooth onboarding and future maintenance.'
      ],
      technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Ant Design', 'Rasa NLP', 'JWT']
    }
  ];

  return (
    <div
      className={`cv-document max-w-[960px] mx-auto transition-all duration-300 bg-white text-zinc-900 paper-shadow border border-zinc-200/90 rounded-2xl md:rounded-3xl ${currentSize.padding} my-2 sm:my-4 md:my-8 ${getFontClass()}`}
    >
      {/* 1. HEADER */}
      <header className="text-center pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-zinc-300">
        <h1 className={`${currentSize.titleSize} font-bold tracking-tight mb-2 text-zinc-950`}>
          Son Huynh Nhat Quang
        </h1>

        <div className={`${currentSize.bodySize} text-zinc-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-1`}>
          <span>{isVi ? 'Ninh Kiều, TP. Cần Thơ' : 'Ninh Kieu, Can Tho City'}</span>
          <span className="text-zinc-400">•</span>
          <a
            href="tel:0343839979"
            className="hover:underline hover:text-blue-600 font-medium whitespace-nowrap"
          >
            0343839979
          </a>
          <span className="text-zinc-400">•</span>
          <a
            href="mailto:shnquang02@gmail.com"
            className="hover:underline hover:text-blue-600 font-medium whitespace-nowrap"
          >
            shnquang02@gmail.com
          </a>
        </div>

        <div className={`${currentSize.bodySize} text-blue-700 flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5 gap-y-1.5 mt-2 font-semibold`}>
          <a
            href="https://linkedin.com/in/quang-son"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline group px-2 sm:px-0 py-0.5 sm:py-0 rounded-md bg-blue-50/60 sm:bg-transparent border sm:border-0 border-blue-200/60 text-xs sm:text-inherit"
          >
            <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate max-w-[150px] sm:max-w-none">linkedin.com/in/quang-son</span>
            <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 flex-shrink-0" />
          </a>
          <span className="text-zinc-400 hidden sm:inline">•</span>
          <a
            href="https://github.com/quangson140302"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline group px-2 sm:px-0 py-0.5 sm:py-0 rounded-md bg-zinc-100 sm:bg-transparent border sm:border-0 border-zinc-200 text-xs sm:text-inherit"
          >
            <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate max-w-[150px] sm:max-w-none">github.com/quangson140302</span>
            <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 flex-shrink-0" />
          </a>
        </div>
      </header>

      {/* 2. SUMMARY */}
      <section className="mb-6">
        <h2 className={`${currentSize.sectionHeading} font-bold uppercase tracking-wider text-zinc-950 border-b-2 border-zinc-950 pb-0.5 mb-2.5`}>
          {isVi ? 'Tóm Tắt Năng Lực (Summary)' : 'Summary'}
        </h2>
        <p className={`${currentSize.bodySize} ${currentSize.lineHeight} text-zinc-800 text-justify`}>
          {isVi ? (
            "Cử nhân Khoa học Máy tính với nền tảng kỹ thuật phần mềm vững chắc và kinh nghiệm thực chiến hỗ trợ người dùng quốc tế trong môi trường công nghệ tốc độ cao. Thành thạo các công nghệ web hiện đại gồm JavaScript, React.js, Node.js, cùng năng lực chuyên sâu về chẩn đoán sự cố kỹ thuật (troubleshooting), xử lý xung đột mã nguồn (code & theme conflicts) và tối ưu hóa luồng trải nghiệm người dùng. Nổi bật với tư duy phân tích nguyên nhân gốc rễ (root cause analysis), khả năng thích ứng công nghệ nhanh chóng và giao tiếp tiếng Anh chuyên nghiệp, hướng tới xây dựng giải pháp kỹ thuật ổn định và nâng cao trải nghiệm khách hàng."
          ) : (
            "A dedicated Computer Science graduate with a solid software engineering foundation and hands-on experience supporting international users in fast-paced tech environments. Proficient in JavaScript, React.js, Node.js, and modern web development, with strong competencies in technical troubleshooting, resolving code and theme conflicts, and optimizing user workflows. Known for analytical problem-solving, fast adaptability to emerging technologies, and clear cross-cultural communication to deliver reliable technical solutions and outstanding customer satisfaction."
          )}
        </p>
      </section>

      {/* 3. SKILLS & ADDITIONAL: Placed right below SUMMARY for maximum recruiter impact */}
      <section className="mb-6">
        <h2 className={`${currentSize.sectionHeading} font-bold uppercase tracking-wider text-zinc-950 border-b-2 border-zinc-950 pb-0.5 mb-2.5 flex items-center justify-between`}>
          <span>{isVi ? 'Kỹ Năng & Thông Tin Bổ Sung (Skills & Additional)' : 'Skills & Additional'}</span>
          <span className="text-xs font-normal text-zinc-500 lowercase tracking-normal">
            {isVi ? 'năng lực cốt lõi' : 'core competencies'}
          </span>
        </h2>
        <div className={`${currentSize.bodySize} ${currentSize.lineHeight} space-y-2 text-zinc-800`}>

          {/* Technical Skills Rows */}
          <div className={`p-1.5 rounded-lg transition-all ${getSpotlightClass(['frontend', 'backend'])}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-950">{isVi ? 'Kỹ năng chuyên môn (Technical):' : 'Technical:'}</span>
              {getMatchedBadge(['frontend', 'backend'], activeFilter.toUpperCase())}
            </div>
            <ul className="list-disc ml-5 space-y-0.5 mt-0.5">
              <li className={matchesFilter(['frontend']) ? 'font-bold text-blue-700' : ''}>
                <span className="font-medium text-zinc-950">Frontend:</span> HTML, CSS, JavaScript (ReactJS), Tailwind CSS.
                {matchesFilter(['frontend']) && <span className="text-[10px] text-blue-600 font-mono ml-1.5">✓ active match</span>}
              </li>
              <li className={matchesFilter(['backend']) ? 'font-bold text-blue-700' : ''}>
                <span className="font-medium text-zinc-950">Backend:</span> NodeJS (ExpressJS), RESTful API, MVC design pattern.
                {matchesFilter(['backend']) && <span className="text-[10px] text-blue-600 font-mono ml-1.5">✓ active match</span>}
              </li>
              <li className={matchesFilter(['backend']) ? 'font-bold text-blue-700' : ''}>
                <span className="font-medium text-zinc-950">Database management:</span> MySQL & MongoDB.
              </li>
              <li className={matchesFilter(['shopify']) ? 'font-bold text-blue-700' : ''}>
                <span className="font-medium text-zinc-950">{isVi ? 'Nền tảng thương mại điện tử & CMS:' : 'E-commerce & CMS:'}</span> Shopify Liquid Code, Shopify Themes, PageFly App Builder.
                {matchesFilter(['shopify']) && <span className="text-[10px] text-blue-600 font-mono ml-1.5">✓ active match</span>}
              </li>
              <li>
                <span className="font-medium text-zinc-950">Version control & Tools:</span> Git, GitHub, Docker, Postman, Browser DevTools.
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div className={`p-1.5 rounded-lg transition-all ${getSpotlightClass(['support'])}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-950">{isVi ? 'Ngoại ngữ (Language):' : 'Language:'}</span>
              {getMatchedBadge(['support'], 'GLOBAL CSAT')}
            </div>
            <p className="mt-0.5">
              {isVi
                ? 'Tiếng Anh – Sử dụng thành thạo hằng ngày trong công việc hỗ trợ kỹ thuật và giao tiếp với khách hàng quốc tế qua live chat và email.'
                : 'English – Proficient used daily in supporting international customers via live chat and email.'}
            </p>
          </div>

          {/* Soft Skills */}
          <div className={`p-1.5 rounded-lg transition-all ${getSpotlightClass(['support'])}`}>
            <span className="font-bold text-zinc-950">{isVi ? 'Kỹ năng mềm (Soft Skills):' : 'Soft Skills:'}</span>{' '}
            {isVi
              ? 'Giao tiếp & Thuyết trình chuyên nghiệp, Tư duy phân tích nguyên nhân gốc rễ, Kỹ năng gỡ lỗi & giải quyết vấn đề, Làm việc nhóm, Khả năng thích ứng cao, Tự học nhanh, Làm việc độc lập hiệu quả, Sẵn sàng làm việc theo ca linh hoạt và ca đêm.'
              : 'Strong Communication, Presentation, Analytical Thinking & Root Cause Analysis, Problem Solving, Teamwork, Adaptability, Fast Learner, Able to work independently, Comfortable with night shifts.'}
          </div>

          {/* Certifications */}
          <div className="p-1.5 rounded-lg">
            <span className="font-bold text-zinc-950">{isVi ? 'Chứng chỉ & Khoá đào tạo (Courses & Certifications):' : 'Courses & Certifications:'}</span>{' '}
            {isVi
              ? 'Khóa học Lập trình Web Frontend Cơ bản (F8 - Fullstack), Khóa học Web Development Bootcamp - Dr. Angela Yu (Udemy).'
              : 'Basic HTML, CSS, JavaScript (F8 - Fullstack), Web Development Bootcamp of Dr. Angela Yu (Udemy).'}
          </div>

        </div>
      </section>

      {/* 4. WORK EXPERIENCE: Ordered Chronologically 2024 -> 2025 */}
      <section className="mb-6">
        <div className="border-b-2 border-zinc-950 pb-0.5 mb-3.5 flex items-center justify-between">
          <h2 className={`${currentSize.sectionHeading} font-bold uppercase tracking-wider text-zinc-950`}>
            {isVi ? 'Kinh Nghiệm Làm Việc (Work Experience)' : 'Work Experience'}
          </h2>
          <span className="text-xs font-mono font-semibold text-blue-700 flex items-center gap-1">
            <span>2024 → 2025 → 2026</span>
          </span>
        </div>

        {/* Milestone 1 (2024 - 2025): PageFly – Shopify Page Builder */}
        <div className={`cv-item ${currentSize.bodySize} ${currentSize.lineHeight} mb-5 ${getSpotlightClass(['shopify', 'support', 'frontend'])}`}>
          <div className="cv-header-row flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-950">
            <div className="flex items-center gap-2 flex-wrap">
              <span>Technical Support Specialist</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold border border-blue-200">
                2024 – 2025
              </span>
              {getMatchedBadge(['shopify', 'support', 'frontend'], 'SHOPIFY TECH SUPPORT')}
            </div>
            <span className="font-semibold text-zinc-600 sm:text-zinc-700 text-xs sm:text-inherit mt-0.5 sm:mt-0">{isVi ? 'Tháng 10/2024 – Tháng 07/2025' : 'October 2024 – July 2025'}</span>
          </div>
          <div className="italic font-medium text-zinc-800 mb-1.5 flex items-center gap-2">
            <span>PageFly – Shopify Page Builder</span>
          </div>
          <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-zinc-800">
            {isVi ? (
              <>
                <li>Cung cấp dịch vụ hỗ trợ kỹ thuật kịp thời, hiệu quả cho thương nhân toàn cầu sử dụng ứng dụng PageFly qua live chat và ticket.</li>
                <li>Trực tiếp chẩn đoán và khắc phục các sự cố liên quan đến Shopify themes, mã nguồn Liquid, CSS, JavaScript và xung đột với ứng dụng bên thứ ba.</li>
                <li>Tư vấn kỹ thuật và hỗ trợ tối ưu giao diện, hiệu năng tải trang cho các cửa hàng Shopify thông qua công cụ PageFly visual editor.</li>
                <li>Duy trì điểm số hài lòng khách hàng (CSAT) xuất sắc nhờ phong cách hỗ trợ tận tâm và tư duy đặt trải nghiệm người dùng làm trọng tâm.</li>
                <li>Linh hoạt làm việc ngoài giờ hành chính để đáp ứng tiến độ công việc và hỗ trợ người dùng đa múi giờ.</li>
              </>
            ) : (
              <>
                <li>Provided timely and effective technical support to global users of the PageFly app via live chat and email.</li>
                <li>Troubleshot and resolved issues related to Shopify themes, Liquid code, CSS, JavaScript, and third-party app conflicts.</li>
                <li>Assisted merchants in building and optimizing their Shopify stores using the PageFly drag-and-drop editor.</li>
                <li>Consistently delivered empathetic, user-focused service, maintaining high customer satisfaction ratings.</li>
                <li>Demonstrated flexibility by working outside of regular business hours to support users in different time zones and meet team needs.</li>
              </>
            )}
          </ul>
        </div>

        {/* Milestone 2 (2024 - 2025): Customer Support Specialist @ BSS Group */}
        <div className={`cv-item ${currentSize.bodySize} ${currentSize.lineHeight} mb-5 ${getSpotlightClass(['support'])}`}>
          <div className="cv-header-row flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-950">
            <div className="flex items-center gap-2 flex-wrap">
              <span>Customer Support Specialist</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold border border-purple-200">
                2025 – 2026
              </span>
              {getMatchedBadge(['support'], 'CUSTOMER SUCCESS')}
            </div>
            <span className="font-semibold text-zinc-600 sm:text-zinc-700 text-xs sm:text-inherit mt-0.5 sm:mt-0">{isVi ? 'Tháng 11/2025 – Tháng 05/2026' : 'November 2025 – May 2026'}</span>
          </div>
          <div className="italic font-medium text-zinc-800 mb-1.5 flex items-center gap-2">
            <span>BSS Group</span>
          </div>
          <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-zinc-800">
            {isVi ? (
              <>
                <li>Cung cấp dịch vụ chăm sóc khách hàng quốc tế chuyên nghiệp, phản hồi nhanh chóng qua live chat và email, đảm bảo giải quyết kịp thời các khúc mắc.</li>
                <li>Hướng dẫn người dùng cấu hình và khai thác tối đa các tính năng của sản phẩm, nâng cao chỉ số gắn kết và trải nghiệm người dùng.</li>
                <li>Phân loại, theo dõi và leo thang (escalate) các trường hợp lỗi phức tạp sang các phòng ban kỹ thuật liên quan để xử lý triệt để.</li>
                <li>Duy trì luồng giao tiếp thông suốt với khách hàng xuyên suốt nhiều múi giờ, thể hiện tính linh hoạt và cam kết chất lượng dịch vụ cao.</li>
                <li>Tham gia xây dựng cơ sở tri thức kỹ thuật (knowledge base), chuẩn hoá tài liệu hướng dẫn xử lý các sự cố thường gặp.</li>
              </>
            ) : (
              <>
                <li>Delivered responsive and professional customer support to international users via live chat and email, ensuring timely resolution of inquiries and issues.</li>
                <li>Assisted customers in navigating product features and services, providing clear and empathetic guidance to enhance user experience.</li>
                <li>Identified, escalated, and followed up on complex issues to ensure complete and satisfactory resolution for customers.</li>
                <li>Maintained consistent communication with customers across different time zones, demonstrating flexibility and commitment to high-quality service.</li>
                <li>Contributed to team knowledge base by documenting recurring issues and effective solutions to improve overall support efficiency.</li>
              </>
            )}
          </ul>
        </div>

        {/* Milestone 3 (2025): Technical Support Specialist @ BSS Group */}
        <div className={`cv-item ${currentSize.bodySize} ${currentSize.lineHeight} mb-2 ${getSpotlightClass(['support', 'backend', 'shopify'])}`}>
          <div className="cv-header-row flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-950">
            <div className="flex items-center gap-2 flex-wrap">
              <span>Technical Support Specialist</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                2026
              </span>
              {getMatchedBadge(['support', 'backend', 'shopify'], 'BSS TECH SUPPORT')}
            </div>
            <span className="font-semibold text-zinc-600 sm:text-zinc-700 text-xs sm:text-inherit mt-0.5 sm:mt-0">{isVi ? 'Tháng 05/2026 – Tháng 09/2026' : 'May 2026 – September 2026'}</span>
          </div>
          <div className="italic font-medium text-zinc-800 mb-1.5 flex items-center gap-2">
            <span>BSS Group</span>
          </div>
          <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-zinc-800">
            {isVi ? (
              <>
                <li>Chẩn đoán và xử lý các xung đột mức mã nguồn (code-level conflicts) cho các cửa hàng thương mại điện tử sử dụng ứng dụng BSS, tập trung vào khả năng tương thích theme, logic bảng giá và quy trình thanh toán (checkout flows).</li>
                <li>Trực tiếp gỡ lỗi (debug) JavaScript, CSS tuỳ biến và Liquid templates bằng DevTools để khôi phục tính năng bị gián đoạn và đảm bảo chuẩn responsive.</li>
                <li>Điều tra lỗi tích hợp API, bất đồng bộ webhook payload và đồng bộ dữ liệu giữa storefront với cơ sở dữ liệu backend.</li>
                <li>Phối hợp chặt chẽ với Software Engineers và QA: tái hiện edge-case bugs, chuẩn bị kịch bản lỗi chi tiết (STR) và nghiệm thu bản hotfix.</li>
                <li>Cung cấp các đoạn mã xử lý nhanh (custom code snippets) và hướng dẫn kỹ thuật kịp thời cho khách hàng quốc tế với điểm số CSAT cao.</li>
              </>
            ) : (
              <>
                <li>Diagnosed and resolved code-level conflicts for global merchants using BSS e-commerce applications, focusing on theme compatibility, pricing rules, and checkout flows.</li>
                <li>Debugged JavaScript, custom CSS styling, and Shopify Liquid template errors directly using browser DevTools to restore broken store features and responsive layouts.</li>
                <li>Investigated API integration failures, webhook payload inconsistencies, and database synchronization issues between storefronts and back-office services.</li>
                <li>Collaborated closely with software developers and QA teams by reproducing edge-case bugs, preparing detailed Steps-to-Reproduce (STR), and verifying hotfixes.</li>
                <li>Delivered timely technical solutions and custom code snippets to international merchants via live chat and ticketing systems with high CSAT ratings.</li>
              </>
            )}
          </ul>
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section className="mb-6 print-page-break">
        <h2 className={`${currentSize.sectionHeading} font-bold uppercase tracking-wider text-zinc-950 border-b-2 border-zinc-950 pb-0.5 mb-3.5 flex items-center justify-between`}>
          <span>{isVi ? 'Dự Án Tiêu Biểu (Projects)' : 'Projects'}</span>
          <span className="text-xs font-normal text-zinc-500 tracking-normal">
            {isVi ? 'kiến trúc kỹ thuật & mã nguồn' : 'technical architecture & source code'}
          </span>
        </h2>

        {/* Project 1: FoodEcom AI Review Platform */}
        <div className={`cv-item ${currentSize.bodySize} ${currentSize.lineHeight} mb-4 cursor-pointer group ${getSpotlightClass(projectsData[0].categories)}`} onClick={() => onSelectProject(projectsData[0])}>
          <div className="cv-header-row flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-950">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="group-hover:text-blue-600 transition-colors">FoodEcom AI Review Platform</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold flex items-center gap-1 border border-blue-200">
                <Layers className="w-3 h-3" /> Architecture
              </span>
              {getMatchedBadge(projectsData[0].categories, 'MERN + AI')}
              <a
                href="https://github.com/quangson140302/mern-ecommerce"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-mono font-normal text-blue-700 hover:underline inline-flex items-center gap-1"
                title="View GitHub Repository"
              >
                [GitHub Repo]
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="font-semibold text-zinc-600 sm:text-zinc-700 text-xs sm:text-inherit mt-0.5 sm:mt-0">9/2024 – 12/2024</span>
          </div>
          <p className="text-zinc-800 mt-0.5">
            <span className="italic font-semibold text-zinc-950">{isVi ? 'Mô tả:' : 'Description:'}</span> {projectsData[0].description}
          </p>
          <div className="mt-1">
            <span className="italic font-semibold text-zinc-950">{isVi ? 'Đóng góp kỹ thuật cốt lõi:' : 'Key Contributions:'}</span>
            <ul className="list-disc ml-4 sm:ml-5 space-y-0.5 mt-0.5 text-zinc-800">
              {projectsData[0].contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <p className="mt-1 text-zinc-800">
            <span className="font-semibold text-zinc-950">{isVi ? 'Công nghệ sử dụng:' : 'Technologies:'}</span> ReactJS, NodeJS, ExpressJS, MongoDB, JWT, Naive Bayes.
          </p>
          <p className="text-xs text-blue-700">
            <span className="font-semibold text-zinc-800">Github Link:</span>{' '}
            <a href="https://github.com/quangson140302/mern-ecommerce" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:underline">
              https://github.com/quangson140302/mern-ecommerce
            </a>
          </p>
        </div>

        {/* Project 2: WASTE-CLASSIFICATION */}
        <div className={`cv-item ${currentSize.bodySize} ${currentSize.lineHeight} mb-4 cursor-pointer group ${getSpotlightClass(projectsData[1].categories)}`} onClick={() => onSelectProject(projectsData[1])}>
          <div className="cv-header-row flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-950">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="group-hover:text-blue-600 transition-colors">WASTE-CLASSIFICATION</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold flex items-center gap-1 border border-purple-200">
                <Layers className="w-3 h-3" /> Architecture
              </span>
              {getMatchedBadge(projectsData[1].categories, 'MOBILE CV')}
              <a
                href="https://github.com/quangson140302/waste-classification"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-mono font-normal text-blue-700 hover:underline inline-flex items-center gap-1"
                title="View GitHub Repository"
              >
                [GitHub Repo]
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="font-semibold text-zinc-600 sm:text-zinc-700 text-xs sm:text-inherit mt-0.5 sm:mt-0">12/2023 – 03/2024</span>
          </div>
          <p className="text-zinc-800 mt-0.5">
            <span className="italic font-semibold text-zinc-950">{isVi ? 'Mô tả:' : 'Description:'}</span> {projectsData[1].description}
          </p>
          <div className="mt-1">
            <span className="italic font-semibold text-zinc-950">{isVi ? 'Đóng góp kỹ thuật cốt lõi:' : 'Key Contributions:'}</span>
            <ul className="list-disc ml-4 sm:ml-5 space-y-0.5 mt-0.5 text-zinc-800">
              {projectsData[1].contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <p className="mt-1 text-zinc-800">
            <span className="font-semibold text-zinc-950">{isVi ? 'Công nghệ sử dụng:' : 'Technologies:'}</span> React Native, Python, Expo Go, Docker, TypeScript.
          </p>
          <p className="text-xs text-blue-700">
            <span className="font-semibold text-zinc-800">Github Link:</span>{' '}
            <a href="https://github.com/quangson140302/waste-classification" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:underline">
              https://github.com/quangson140302/waste-classification
            </a>
          </p>
        </div>

        {/* Project 3: MathGenieAssistant */}
        <div className={`cv-item ${currentSize.bodySize} ${currentSize.lineHeight} cursor-pointer group ${getSpotlightClass(projectsData[2].categories)}`} onClick={() => onSelectProject(projectsData[2])}>
          <div className="cv-header-row flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-950">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="group-hover:text-blue-600 transition-colors">MathGenieAssistant</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold flex items-center gap-1 border border-emerald-200">
                <Layers className="w-3 h-3" /> Architecture
              </span>
              {getMatchedBadge(projectsData[2].categories, 'RASA NLP')}
              <a
                href="https://github.com/quangson140302/MathGenieAssistant"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-mono font-normal text-blue-700 hover:underline inline-flex items-center gap-1"
                title="View GitHub Repository"
              >
                [GitHub Repo]
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="font-semibold text-zinc-600 sm:text-zinc-700 text-xs sm:text-inherit mt-0.5 sm:mt-0">08/2023 – 12/2023</span>
          </div>
          <p className="text-zinc-800 mt-0.5">
            <span className="italic font-semibold text-zinc-950">{isVi ? 'Mô tả:' : 'Description:'}</span> {projectsData[2].description}
          </p>
          <div className="mt-1">
            <span className="italic font-semibold text-zinc-950">{isVi ? 'Đóng góp kỹ thuật cốt lõi:' : 'Key Contributions:'}</span>
            <ul className="list-disc ml-4 sm:ml-5 space-y-0.5 mt-0.5 text-zinc-800">
              {projectsData[2].contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <p className="mt-1 text-zinc-800">
            <span className="font-semibold text-zinc-950">{isVi ? 'Công nghệ sử dụng:' : 'Technologies:'}</span> ReactJS, NodeJS, ExpressJS, MongoDB, Ant Design, Rasa.
          </p>
          <p className="text-xs text-blue-700">
            <span className="font-semibold text-zinc-800">Github Link:</span>{' '}
            <a href="https://github.com/quangson140302/MathGenieAssistant" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:underline">
              https://github.com/quangson140302/MathGenieAssistant
            </a>
          </p>
        </div>
      </section>

      {/* 6. EDUCATION */}
      <section className="cv-item">
        <h2 className={`${currentSize.sectionHeading} font-bold uppercase tracking-wider text-zinc-950 border-b-2 border-zinc-950 pb-0.5 mb-2.5 flex items-center justify-between`}>
          <span>{isVi ? 'Học Vấn (Education)' : 'Education'}</span>
          <span className="text-[11px] font-mono font-normal text-zinc-500 tracking-normal">
            2020 – 2024
          </span>
        </h2>
        <div className={`${currentSize.bodySize} ${currentSize.lineHeight}`}>
          <div className="cv-header-row flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-zinc-950">
            <span>{isVi ? 'Đại học Cần Thơ (Can Tho University)' : 'Can Tho University'}</span>
            <span className="font-medium text-zinc-600 sm:text-zinc-700 text-xs sm:text-inherit mt-0.5 sm:mt-0">{isVi ? 'Ninh Kiều, Cần Thơ' : 'Ninh Kieu, Can Tho City'}</span>
          </div>
          <div className="cv-header-row flex flex-col sm:flex-row sm:items-baseline justify-between italic text-zinc-800">
            <span>{isVi ? 'Chuyên ngành: Khoa học Máy tính (Major: Computer Science)' : 'Major: Computer Science'}</span>
            <span className="not-italic font-semibold text-zinc-600 sm:text-zinc-700 text-xs sm:text-inherit mt-0.5 sm:mt-0">2020 – 2024</span>
          </div>
          <p className="mt-1 text-zinc-800">
            <span className="font-semibold text-zinc-950">{isVi ? 'Các môn học chuyên ngành trọng tâm:' : 'Relevant Coursework:'}</span>{' '}
            {isVi
              ? 'Cơ sở Lập trình, Lý thuyết Đồ thị, Cấu trúc Dữ liệu & Giải thuật, Quản trị Cơ sở Dữ liệu, Phân tích & Thiết kế Thuật toán, Phát triển Ứng dụng Web.'
              : 'Fundamentals of Programming, Graph Theory, Data Structures, Data Management, Algorithm Analysis & Design, Web Application Development.'}
          </p>
        </div>
      </section>

    </div>
  );
}
