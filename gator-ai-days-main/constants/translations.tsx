import React from "react";
import {
  AcademicCapIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export interface EducationLevel {
  name: string;
  icon: React.ReactElement;
}

export interface TextElements {
  buttonText: {
    continue: string;
  };
  languagePage: {
    description: string;
    backButtonText: string;
  };
  infoPage: {
    nameText: string;
    namePlaceHolder: string;
    edLevelText: string;
    edLevels: EducationLevel[];
    backButtonText: string;
  };
  searchPage: {
    gatorGreeting1: string;
    gatorGreeting2: string;
    sampleQuestions: string[];
  };
}

export interface Translation {
  en: TextElements;
  es: TextElements;
  fr: TextElements;
  pt: TextElements;
  de: TextElements;
  it: TextElements;
  ko: TextElements;
  zh: TextElements;
  ru: TextElements;
  ja: TextElements;
}

export const translations: Translation = {
  en: {
    buttonText: {
      continue: "Continue",
    },
    languagePage: {
      description: "Select a language to get started",
      backButtonText: "Back to home",
    },
    infoPage: {
      nameText: "What is your name?",
      namePlaceHolder: "Nice to meet you!",
      edLevelText: "What's your education level?",
      edLevels: [
        {
          name: "Elementary",
          icon: <StarIcon />,
        },
        {
          name: "Middle School",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "High School",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "College",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "Back to language selection",
    },
    searchPage: {
      gatorGreeting1: "Hi, I'm Guppy!",
      gatorGreeting2:
        "I'm here to help you find the best resources for your education! Enter anything you want to learn about below!",
      sampleQuestions: [
        "Do unicorns exist?",
        "How does a bird fly?",
        "What is the meaning of life?",
        "How deep is the ocean?",
        "Why do we sleep?",
      ],
    },
  },
  es: {
    buttonText: {
      continue: "Continuar",
    },
    languagePage: {
      description: "Seleccione un idioma para comenzar",
      backButtonText: "Volver a la página de inicio",
    },
    infoPage: {
      nameText: "¿Cuál es tu nombre?",
      namePlaceHolder: "¡Mucho gusto!",
      edLevelText: "¿Cuál es tu nivel de educación?",
      edLevels: [
        {
          name: "Primaria",
          icon: <StarIcon />,
        },
        {
          name: "Escuela intermedia",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "Escuela secundaria",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "Universidad",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "Volver a la selección de idioma",
    },
    searchPage: {
      gatorGreeting1: "¡Hola, soy Guppy!",
      gatorGreeting2:
        "¡Estoy aquí para ayudarte a encontrar los mejores recursos para tu educación! ¡Ingrese cualquier cosa que quiera aprender a continuación!",
      sampleQuestions: [
        "¿Existen los unicornios?",
        "¿Cómo vuela un pájaro?",
        "¿Cuál es el significado de la vida?",
        "¿Qué tan profundo es el océano?",
        "¿Por qué dormimos?",
      ],
    },
  },
  fr: {
    buttonText: {
      continue: "Continuer",
    },
    languagePage: {
      description: "Sélectionnez une langue pour commencer",
      backButtonText: "Retour à l'accueil",
    },
    infoPage: {
      nameText: "Quel est votre nom?",
      namePlaceHolder: "Enchanté!",
      edLevelText: "Quel est votre niveau d'éducation?",
      edLevels: [
        {
          name: "Élémentaire",
          icon: <StarIcon />,
        },
        {
          name: "Collège",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "Lycée",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "Université",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "Retour à la sélection de la langue",
    },
    searchPage: {
      gatorGreeting1: "Salut, je suis Guppy!",
      gatorGreeting2:
        "Je suis là pour vous aider à trouver les meilleurs ressources pour votre éducation! Entrez tout ce que vous voulez apprendre ci-dessous!",
      sampleQuestions: [
        "Les licornes existent-elles?",
        "Comment un oiseau vole-t-il?",
        "Quel est le sens de la vie?",
        "Quelle est la profondeur de l'océan?",
        "Pourquoi dormons-nous?",
      ],
    },
  },
  de: {
    buttonText: {
      continue: "Fortsetzen",
    },
    languagePage: {
      description: "Wählen Sie eine Sprache aus, um zu beginnen",
      backButtonText: "Zurück zur Startseite",
    },
    infoPage: {
      nameText: "Wie heißt du?",
      namePlaceHolder: "Freut mich!",
      edLevelText: "Welchen Bildungsstand hast du?",
      edLevels: [
        {
          name: "Grundschule",
          icon: <StarIcon />,
        },
        {
          name: "Mittelschule",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "Gymnasium",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "Universität",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "Zurück zur Sprachauswahl",
    },
    searchPage: {
      gatorGreeting1: "Hallo, ich bin Guppy!",
      gatorGreeting2:
        "Ich bin hier, um dir bei der Suche nach den besten Ressourcen für deine Bildung zu helfen! Geben Sie unten alles ein, was Sie über etwas lernen möchten!",
      sampleQuestions: [
        "Existieren Einhörner?",
        "Wie fliegt ein Vogel?",
        "Was ist der Sinn des Lebens?",
        "Wie tief ist der Ozean?",
        "Warum schlafen wir?",
      ],
    },
  },
  it: {
    buttonText: {
      continue: "Continua",
    },
    languagePage: {
      description: "Seleziona una lingua per iniziare",
      backButtonText: "Torna alla home",
    },
    infoPage: {
      nameText: "Come ti chiami?",
      namePlaceHolder: "Piacere!",
      edLevelText: "A quale livello di istruzione sei?",
      edLevels: [
        {
          name: "Elementare",
          icon: <StarIcon />,
        },
        {
          name: "Scuola media",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "Scuola superiore",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "Università",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "Torna alla selezione della lingua",
    },
    searchPage: {
      gatorGreeting1: "Ciao, sono Guppy!",
      gatorGreeting2:
        "Sono qui per aiutarti a trovare le risorse migliori per la tua educazione! Inserisci tutto ciò che vuoi imparare qui sotto!",
      sampleQuestions: [
        "Esistono gli unicorno?",

        "Come vola un uccello?",
        "Qual è il senso della vita?",
        "Quanto è profondo l'oceano?",
        "Perché dormiamo?",
      ],
    },
  },
  pt: {
    buttonText: {
      continue: "Continuar",
    },
    languagePage: {
      description: "Selecione um idioma para começar",
      backButtonText: "Voltar para a página inicial",
    },
    infoPage: {
      nameText: "Qual é o seu nome?",
      namePlaceHolder: "Prazer!",
      edLevelText: "Qual é o seu nível de educação?",
      edLevels: [
        {
          name: "Elementar",
          icon: <StarIcon />,
        },
        {
          name: "Ensino médio",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "Ensino superior",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "Universidade",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "Voltar à seleção de idioma",
    },
    searchPage: {
      gatorGreeting1: "Olá, sou Guppy!",
      gatorGreeting2:
        "Estou aqui para ajudá-lo a encontrar os melhores recursos para sua educação! Insira tudo o que você quer aprender abaixo!",
      sampleQuestions: [
        "Existem unicórnios?",
        "Como um pássaro voa?",
        "Qual é o sentido da vida?",
        "Quão profundo é o oceano?",
        "Por que dormimos?",
      ],
    },
  },
  ru: {
    buttonText: {
      continue: "Продолжить",
    },
    languagePage: {
      description: "Выберите язык для начала",
      backButtonText: "Вернуться на главную страницу",
    },
    infoPage: {
      nameText: "Как вас зовут?",
      namePlaceHolder: "Приятно познакомиться!",
      edLevelText: "Какой у вас уровень образования?",
      edLevels: [
        {
          name: "Начальная школа",
          icon: <StarIcon />,
        },
        {
          name: "Средняя школа",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "Среднее профессиональное образование",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "Высшее образование",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "Вернуться к выбору языка",
    },
    searchPage: {
      gatorGreeting1: "Привет, я Guppy!",
      gatorGreeting2:
        "Я здесь, чтобы помочь вам найти лучшие ресурсы для вашего образования! Введите все, что вы хотите узнать ниже!",
      sampleQuestions: [
        "Существуют единороги?",
        "Как летает птица?",
        "Каков смысл жизни?",
        "Как глубоко океан?",
        "Почему мы спим?",
      ],
    },
  },
  zh: {
    buttonText: {
      continue: "继续",
    },
    languagePage: {
      description: "选择一种语言开始",
      backButtonText: "返回主页",
    },
    infoPage: {
      nameText: "你叫什么名字？",
      namePlaceHolder: "很高兴认识你！",
      edLevelText: "你的教育程度是什么？",
      edLevels: [
        {
          name: "小学",
          icon: <StarIcon />,
        },
        {
          name: "中学",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "高中",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "大学",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "返回语言选择",
    },
    searchPage: {
      gatorGreeting1: "你好，我是Guppy！",
      gatorGreeting2:
        "我在这里帮助你找到最好的教育资源！在下面输入你想学的一切！",
      sampleQuestions: [
        "有独角兽吗？",
        "一只鸟是如何飞的？",
        "生命的意义是什么？",
        "海洋有多深？",
        "为什么我们要睡觉？",
      ],
    },
  },
  ko: {
    buttonText: {
      continue: "계속",
    },
    languagePage: {
      description: "시작하려면 언어를 선택하십시오",
      backButtonText: "홈으로 돌아가기",
    },
    infoPage: {
      nameText: "이름이 뭐에요?",
      namePlaceHolder: "만나서 반가워요!",
      edLevelText: "학력은 어떻게 되세요?",
      edLevels: [
        {
          name: "초등학교",
          icon: <StarIcon />,
        },
        {
          name: "중학교",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "고등학교",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "대학교",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "언어 선택으로 돌아가기",
    },
    searchPage: {
      gatorGreeting1: "안녕하세요, Guppy입니다!",
      gatorGreeting2:
        "여기서 교육 자원을 찾는 데 도움이 되도록 하겠습니다! 아래에 배우고 싶은 모든 것을 입력하십시오!",
      sampleQuestions: [
        "유니콘은 있습니까?",
        "새는 어떻게 날까요?",
        "인생의 의미는 무엇입니까?",
        "바다는 얼마나 깊습니까?",
        "왜 우리는 잠을 자습니까?",
      ],
    },
  },
  ja: {
    buttonText: {
      continue: "続行する",
    },
    languagePage: {
      description: "始めるには言語を選択してください",
      backButtonText: "ホームに戻る",
    },
    infoPage: {
      nameText: "あなたの名前は何ですか？",
      namePlaceHolder: "はじめまして！",
      edLevelText: "あなたの教育レベルは何ですか？",
      edLevels: [
        {
          name: "小学校",
          icon: <StarIcon />,
        },
        {
          name: "中学校",
          icon: <PuzzlePieceIcon />,
        },
        {
          name: "高校",
          icon: <RocketLaunchIcon />,
        },
        {
          name: "大学",
          icon: <AcademicCapIcon />,
        },
      ],
      backButtonText: "言語選択に戻る",
    },
    searchPage: {
      gatorGreeting1: "こんにちは、Guppyです！",
      gatorGreeting2:
        "ここであなたに最高の教育リソースを見つけるのを手伝います！下にあなたが学びたいすべてを入力してください！",
      sampleQuestions: [
        "ユニコーンはありますか？",
        "鳥はどのように飛ぶのですか？",
        "人生の意味は何ですか？",
        "海はどれほど深いですか？",
        "なぜ私たちは寝ますか？",
      ],
    },
  },
};
