/**
 * Ventorme Landing Page Configuration
 * HACKNEXT × Ventorme competition landing page
 * 
 * Target URL specification:
 * https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-YOUR_TEAM_NUMBER
 */
export const TEAM_ID = '057';

export const BASE_REGISTER_URL = 'https://ventorme.ai/register';

/**
 * Returns the exact registration URL with team UTM parameters preserved.
 * Defaults to team-057 (Команда 57).
 * Supports dynamic override if opened with ?team=57 or ?team=057.
 */
export function getRegisterUrl(teamId: string = TEAM_ID): string {
  if (typeof window !== 'undefined') {
    try {
      const params = new URLSearchParams(window.location.search);
      const queryTeam = params.get('team') || params.get('team_id');
      if (queryTeam) {
        const cleanTeam = queryTeam.replace(/^team-/, '');
        return `${BASE_REGISTER_URL}?utm_source=hacknext&utm_campaign=team-${cleanTeam}`;
      }
    } catch {
      // fallback
    }
  }
  return `${BASE_REGISTER_URL}?utm_source=hacknext&utm_campaign=team-${teamId}`;
}

/**
 * Robust smooth scroll to an element by ID
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export interface InterestOption {
  id: string;
  label: string;
  iconName: string;
  tagline: string;
}

export const INTEREST_OPTIONS: InterestOption[] = [
  { id: 'tech', label: 'Технологии & IT', iconName: 'Cpu', tagline: 'Код, ИИ, кибербезопасность' },
  { id: 'science', label: 'Наука & Биомед', iconName: 'Atom', tagline: 'Медицина, биотех, исследования' },
  { id: 'design', label: 'Дизайн & Медиа', iconName: 'Palette', tagline: 'UI/UX, 3D, цифровой арт' },
  { id: 'business', label: 'Бизнес & Финтех', iconName: 'TrendingUp', tagline: 'Стартапы, аналитика, инвестиции' },
  { id: 'people', label: 'Люди & Общество', iconName: 'Users', tagline: 'Дипломатия, психология, право' },
  { id: 'creation', label: 'Инженерия', iconName: 'Sparkles', tagline: 'Робототехника, аэрокосмос, IoT' },
];

export interface TrajectoryCombo {
  interests: string[];
  roleTitle: string;
  roleCategory: string;
  description: string;
  marketNeed: string;
  sampleDisciplines: string[];
}

export const DEMO_TRAJECTORIES: TrajectoryCombo[] = [
  {
    interests: ['tech', 'design'],
    roleTitle: 'Spatial Experience Architect & Creative Technologist',
    roleCategory: 'Интерфейсы будущего',
    description: 'Создание пространственных интерфейсов, 3D-опыта и генеративных систем, где передовой код встречается с визуальной драматургией.',
    marketNeed: 'Растущий спрос в XR, интерактивных медиа, автономных интерфейсах и играх.',
    sampleDisciplines: ['Пространственные UI/UX', 'Шейдеры & WebGL', 'Дизайн-системы']
  },
  {
    interests: ['tech', 'people'],
    roleTitle: 'Human-Centered AI & Developer Experience Architect',
    roleCategory: 'Человеко-машинное взаимодействие',
    description: 'Проектирование этичных ИИ-систем и инструментов, которые делают сложные технологии понятными, безопасными и доступными людям.',
    marketNeed: 'Критическая нехватка специалистов, способных переводить запросы людей на язык технологических моделей.',
    sampleDisciplines: ['Этика технологий', 'User Research', 'Архитектура взаимодействия']
  },
  {
    interests: ['science', 'tech'],
    roleTitle: 'Computational Systems & Bio-Informatics Lead',
    roleCategory: 'Вычислительная наука',
    description: 'Моделирование сложных биологических систем, анализ геномных данных и синтез новых решений на стыке биологии и алгоритмов.',
    marketNeed: 'Биотехнологический бум, персонализированная медицина и моделирование климатических процессов.',
    sampleDisciplines: ['Анализ данных', 'Моделирование систем', 'Научные вычисления']
  },
  {
    interests: ['design', 'science'],
    roleTitle: 'Data Visualization & Cognitive Interface Designer',
    roleCategory: 'Визуализация сложности',
    description: 'Превращение терабайтов абстрактных научных и сенсорных данных в кристально ясные интерактивные карты и инструменты принятия решений.',
    marketNeed: 'Лаборатории, исследовательские институты и финтех-компании ищут ясность в океане данных.',
    sampleDisciplines: ['Когнитивная психология', 'Информационная архитектура', 'Визуальная аналитика']
  },
  {
    interests: ['business', 'tech'],
    roleTitle: 'Venture Product Engineer & AI Strategist',
    roleCategory: 'Технологическое предпринимательство',
    description: 'Сборка первых рабочих версий продуктов и поиск рыночной ниши для технологических инноваций с нуля.',
    marketNeed: 'Стартапы и инновационные подразделения, где инженер должен мыслить как основатель бизнеса.',
    sampleDisciplines: ['Product Discovery', 'Архитектура решений', 'Юнит-экономика']
  },
  {
    interests: ['business', 'people'],
    roleTitle: 'Organizational Ecosystem & Community Catalyst',
    roleCategory: 'Сообщества и партнерства',
    description: 'Формирование живых профессиональных сообществ, венчурных сетей и распределенных команд вокруг больших идей.',
    marketNeed: 'Смена парадигмы найма: переход к открытым экосистемам и партнерствам.',
    sampleDisciplines: ['Ecosystem Growth', 'Культура команд', 'Партнерские альянсы']
  }
];

// --- REAL EXAMPLES DATA ---

export interface EntSubjectCombo {
  id: string;
  title: string;
  description: string;
  code: string;
  popularSpecialties: string[];
  averageGrantScore: number;
}

export const ENT_SUBJECT_COMBOS: EntSubjectCombo[] = [
  {
    id: 'math-inf',
    title: 'Математика + Информатика',
    description: 'IT, программная инженерия, кибербезопасность, ИИ и анализ данных',
    code: 'B057, B058, B059',
    popularSpecialties: ['Информационные технологии', 'Информационная безопасность', 'Big Data & Data Science'],
    averageGrantScore: 112
  },
  {
    id: 'phys-math',
    title: 'Физика + Математика',
    description: 'Инженерия, робототехника, энергетика, авиастроение, строительство',
    code: 'B062, B063, B064',
    popularSpecialties: ['Робототехника и мехатроника', 'Электроэнергетика', 'Нефтегазовое дело'],
    averageGrantScore: 104
  },
  {
    id: 'bio-chem',
    title: 'Биология + Химия',
    description: 'Общая медицина, стоматология, фармация, биотехнологии',
    code: 'B086, B087, B088',
    popularSpecialties: ['Общая медицина', 'Стоматология', 'Биотехнология'],
    averageGrantScore: 118
  },
  {
    id: 'geo-math',
    title: 'География + Математика',
    description: 'Экономика, логистика, менеджмент, финансы, маркетинг',
    code: 'B044, B046, B047',
    popularSpecialties: ['Финансы и Финтех', 'Логистика', 'Международная торговля'],
    averageGrantScore: 108
  },
  {
    id: 'eng-history',
    title: 'Английский + Всемирная история',
    description: 'Международные отношения, переводческое дело, дипломатия',
    code: 'B036, B041, B042',
    popularSpecialties: ['Международные отношения', 'Переводческое дело', 'Востоковедение'],
    averageGrantScore: 122
  }
];

export interface UniversityGrantSample {
  id: string;
  name: string;
  city: string;
  badge: string;
  major: string;
  minGrantScore2024: number;
  totalGrants: number;
  ratingRank: string;
  tags: string[];
}

export const REAL_UNIVERSITIES_SAMPLE: UniversityGrantSample[] = [
  {
    id: 'nu',
    name: 'Nazarbayev University (NU)',
    city: 'Астана',
    badge: 'Топ-1 в Центральной Азии',
    major: 'Computer Science & Robotics',
    minGrantScore2024: 128,
    totalGrants: 950,
    ratingRank: '#1 РК / THE World Ranked',
    tags: ['100% грант NU', 'Обучение на английском', 'Международные профессора']
  },
  {
    id: 'kbtu',
    name: 'КБТУ (Казахстанско-Британский ТУ)',
    city: 'Алматы',
    badge: 'Флагман IT и Инженерии',
    major: 'Software Engineering & AI',
    minGrantScore2024: 123,
    totalGrants: 480,
    ratingRank: '#1 по трудоустройству IT',
    tags: ['Средняя зарплата: 680k ₸', 'Партнерства с BigTech', 'Двойной диплом']
  },
  {
    id: 'aitu',
    name: 'Astana IT University (AITU)',
    city: 'Астана',
    badge: 'Современный IT кампус',
    major: 'Cybersecurity & Big Data',
    minGrantScore2024: 118,
    totalGrants: 650,
    ratingRank: 'Топ-3 IT вузов РК',
    tags: ['3-летнее обучение', 'Инкубатор стартапов', 'Хакатоны']
  },
  {
    id: 'iitu',
    name: 'МУИТ (IITU)',
    city: 'Алматы',
    badge: 'Специализированный IT вуз',
    major: 'Information Systems',
    minGrantScore2024: 114,
    totalGrants: 720,
    ratingRank: 'Лидер отрасли IT',
    tags: ['IT-Hub', 'Сильная база олимпиадников', 'Гранты компаний']
  },
  {
    id: 'satbayev',
    name: 'Satbayev University (Политех)',
    city: 'Алматы',
    badge: 'Старейший технический',
    major: 'Robotics & Mechanical Eng',
    minGrantScore2024: 106,
    totalGrants: 1400,
    ratingRank: 'Самое большое число грантов',
    tags: ['Военная кафедра', 'Современные лаборатории', 'Большое общежитие']
  },
  {
    id: 'kaznu',
    name: 'КазНУ им. аль-Фараби',
    city: 'Алматы',
    badge: 'Классический национальный',
    major: 'Data Science & BioTech',
    minGrantScore2024: 116,
    totalGrants: 1250,
    ratingRank: 'QS World #163',
    tags: ['Огромный кампус', 'Научные гранты', 'Академическая мобильность']
  }
];

export interface StudentCase {
  name: string;
  grade: string;
  city: string;
  score: string;
  target: string;
  story: string;
  avatarBg: string;
  benefit: string;
}

export const REAL_STUDENT_CASES: StudentCase[] = [
  {
    name: 'Альтаир С.',
    grade: 'Выпускник 2024, 11 класс',
    city: 'г. Шымкент',
    score: 'ЕНТ 124 (Мат-Инф)',
    target: 'Поступил на грант в КБТУ (Computer Science)',
    story: '«В начале 11 класса набирал всего 78 баллов и не знал, куда подавать. С помощью калькулятора грантов Ventorme увидел точный проходной порог прошлых лет и сфокусировался на слабых темах в информатике.»',
    avatarBg: 'from-blue-500 to-indigo-600',
    benefit: 'Сэкономил семье 4.8 млн ₸ на платном обучении'
  },
  {
    name: 'Анель М.',
    grade: 'Выпускница НИШ, 12 класс',
    city: 'г. Алматы',
    score: 'IELTS 7.5, SAT 1480',
    target: 'Full Scholarship в City University of Hong Kong + NU',
    story: '«ИИ-помощник Venti помог мне составить карту дедлайнов для 6 зарубежных университетов и проверить драфт мотивационного эссе за считанные минуты.»',
    avatarBg: 'from-emerald-500 to-teal-600',
    benefit: 'Получила 100% стипендию за рубежом'
  },
  {
    name: 'Данияр К.',
    grade: 'Ученик 10 класса',
    city: 'г. Астана',
    score: 'Профтест: 94% BioTech',
    target: 'Выбрал профильные предметы за 1.5 года до ЕНТ',
    story: '«Родители хотели, чтобы я пошел на экономику, а я любил химию и компьютеры. Ventorme показал профессию Биоинформатика и убедил родителей, что это топовый тренд.»',
    avatarBg: 'from-amber-500 to-orange-600',
    benefit: 'Избавился от стресса неопределенности'
  }
];

export interface VentiMockDialog {
  question: string;
  response: string;
  recommendedTag: string;
}

export const VENTI_DIALOG_EXAMPLES: VentiMockDialog[] = [
  {
    question: 'У меня 115 баллов ЕНТ (Мат + Инф). Куда есть реальные шансы пройти на грант?',
    response: 'С 115 баллами по направлению В057 (Информационные технологии) твои шансы на грант в 2026 году составляют ~85%! Ты с высокой вероятностью проходишь в Satbayev University, IITU (МУИТ), КарТУ и ЕНУ им. Гумилева. Для КБТУ или AITU порог был около 118–123 баллов, но при наличии сельской квоты шансы вырастают до 92%. Рекомендую расставить приоритеты так: 1) КБТУ 2) AITU 3) IITU 4) Satbayev.',
    recommendedTag: 'Калькулятор ЕНТ'
  },
  {
    question: 'Люблю биологию и IT одновременно. Какую специальность выбрать, чтобы не быть просто врачом?',
    response: 'Идеальный выбор — Биоинформатика (Computational Biology), Генная инженерия или Разработка медицинского софта (HealthTech). Специалисты в этой сфере разрабатывают алгоритмы для поиска лекарств с помощью ИИ и анализа ДНК. В Казахстане программы есть в NU и КазНУ, а за рубежом — это топ-3 самых высокооплачиваемых направлений с грантами!',
    recommendedTag: 'Профтест с ИИ'
  },
  {
    question: 'Какой уровень IELTS и SAT нужен, чтобы учиться за рубежом бесплатно?',
    response: 'Для полной стипендии (Full Tuition + Stipend) ориентир: IELTS 7.0–7.5 и SAT от 1420+. Вузы Гонконга (HKUST, CityU), Южной Кореи (KAIST, UNIST), Италии (гранты DSU) и Венгрии (Stipendium Hungaricum) дают 100% покрытие расходов для сильных школьников из Казахстана. В Ventorme есть пошаговый трек подготовки к обоим экзаменам!',
    recommendedTag: 'IELTS / SAT Подготовка'
  }
];

