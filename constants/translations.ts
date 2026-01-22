import { Lang, TranslationSet } from "@/types/portfolio";

export const translations: Record<Lang, TranslationSet> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      cta: "Explore Projects",
      description:
        "I craft high-performance digital experiences using Next.js and Cloud technologies. Turning complex logic into elegant interfaces.",
    },
    about: {
      title: "About Me",
      description:
        "I currently live in Vientiane., Laos, I specialize in building scalable web applications. I bridge the gap between robust backend logic and pixel-perfect frontend design.",
      skillGroups: {
        frontend: "Frontend",
        backend: "Backend & DevOps",
        design: "Tools & Others",
      },
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Tech Solutions Laos",
          role: "Senior Full Stack Developer",
          period: "2021 - Present",
          desc: "Leading the development of enterprise-scale web applications and mentoring junior developers.",
        },
        {
          company: "Digital Nomad Agency",
          role: "Web Developer",
          period: "2019 - 2021",
          desc: "Built custom e-commerce solutions and high-traffic marketing sites for international clients.",
        },
      ],
    },
    projects: {
      title: "Selected Projects",
      filterAll: "All",
      viewProject: "View Project",
    },
    contact: {
      title: "Let's Collaborate",
      description:
        "Ready to transform your ideas into reality? Let's build something extraordinary.",
      name: "Full Name",
      email: "Email Address",
      message: "Tell me about your project",
      send: "Send Message",
      success: "Message sent! I'll get back to you soon.",
    },

    footer: "© 2025 Crafted with Next.js, Tailwind & Framer Motion.",
  },
  lo: {
    nav: {
      about: "ກ່ຽວກັບ",
      projects: "ຜົນງານ",
      experience: "ປະສົບການ",
      contact: "ຕິດຕໍ່",
    },
    hero: {
      greeting: "ສະບາຍດີ, ຂ້ອຍແມ່ນ",
      role: "ນັກພັດທະນາເວັບໄຊທ໌ (Full Stack)",
      cta: "ເບິ່ງຜົນງານ",
      description:
        "ຂ້ອຍສ້າງປະສົບການດິຈິຕອນທີ່ມີປະສິດທິພາບສູງໂດຍໃຊ້ Next.js ແລະ ເຕັກໂນໂລຊີ Cloud. ປ່ຽນລະບົບທີ່ສັບສົນໃຫ້ເປັນໜ້າຕາທີ່ສວຍງາມ.",
    },
    about: {
      title: "ກ່ຽວກັບຂ້ອຍ",
      description:
        "ປະຈຸບັນຂ້ອຍອາໄສຢູ່ນະຄອນຫຼວງວຽງຈັນ, ປະເທດລາວ, ຂ້ອຍຊ່ຽວຊານໃນການສ້າງແອັບພລິເຄຊັນເວັບທີ່ສາມາດຂະຫຍາຍຕົວໄດ້. ຂ້ອຍເຊື່ອມຕໍ່ຊ່ອງຫວ່າງລະຫວ່າງລະບົບ backend ທີ່ເຂັ້ມແຂງ ແລະ ການອອກແບບ frontend ທີ່ສົມບູນແບບທຸກລາຍລະອຽດ.",
      skillGroups: {
        frontend: "ພາກສ່ວນໜ້າ (Frontend)",
        backend: "ພາກສ່ວນຫຼັງ (Backend)",
        design: "ເຄື່ອງມືອື່ນໆ",
      },
    },
    experience: {
      title: "ປະສົບການວຽກ",
      items: [
        {
          company: "Tech Solutions Laos",
          role: "Senior Full Stack Developer",
          period: "2021 - ປັດຈຸບັນ",
          desc: "ເປັນຜູ້ນຳໃນການພັດທະນາເວັບໄຊທ໌ຂະໜາດໃຫຍ່ ແລະ ໃຫ້ຄຳປຶກສາແກ່ນັກພັດທະນາລຸ້ນໃໝ່.",
        },
        {
          company: "Digital Nomad Agency",
          role: "Web Developer",
          period: "2019 - 2021",
          desc: "ສ້າງເວັບໄຊທ໌ອີຄອມເມີຊ ແລະ ເວັບໄຊທ໌ການຕະຫຼາດໃຫ້ກັບລູກຄ້າຕ່າງປະເທດ.",
        },
      ],
    },
    projects: {
      title: "ຜົນງານທີ່ຜ່ານມາ",
      filterAll: "ທັງໝົດ",
      viewProject: "ເບິ່ງໂຄງການ",
    },
    contact: {
      title: "ມາຮ່ວມງານກັນ",
      description:
        "ພ້ອມທີ່ຈະປ່ຽນແນວຄວາມຄິດຂອງທ່ານໃຫ້ກາຍເປັນຄວາມຈິງບໍ? ມາສ້າງບາງສິ່ງທີ່ພິເສດຮ່ວມກັນ.",
      name: "ຊື່ ແລະ ນາມສະກຸນ",
      email: "ອີເມວ",
      message: "ບອກຂ້ອຍກ່ຽວກັບໂຄງການຂອງເຈົ້າ",
      send: "ສົ່ງຂໍ້ຄວາມ",
      success: "ສົ່ງຂໍ້ຄວາມສຳເລັດ! ຂ້ອຍຈະຕິດຕໍ່ກັບຫາເຈົ້າໂດຍໄວ.",
    },
    footer: "© 2025 ສ້າງດ້ວຍ Next.js, Tailwind ແລະ Framer Motion.",
  },
};
