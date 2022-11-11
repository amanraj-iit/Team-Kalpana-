export const variants = (delay: number) => ({
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});

export const languageVariants = (index: number, left: boolean) => ({
  hidden: { opacity: 0, translateX: left ? -20 : 20 },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      delay: 1 + index * 0.075,
      duration: 0.1,
    },
  },
});

export const questionVariants = () => ({
  hidden: { opacity: 1, translateX: 0 },
  visible: {
    opacity: 1,
    translateX: -300,
    transition: {
      duration: 1.0,
    },
  },
});
