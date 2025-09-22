import { create } from "zustand";

const useModuleStore = create((set, get) => ({
  domain: [],
  courses: [],
  modules: [],
  lessons: [],
  learningContent: [],
  index: 0,
  loading: false,
  error: null,
  time: null,
  estimatedTime: null,
  moduleSpecificLessons: [],

  getEstimatedTime: () => {
    const { lessons, modules, learningContent, index } = get();
    const moduleSpecificLesson = lessons
      .filter((l) => l.moduleId === modules[index]?._id)
      .map((I) => I._id);
    const sum = moduleSpecificLesson
      .flatMap((id) =>
        learningContent
          .filter((l) => l.lessonId === id)
          .map((item) => parseFloat(item?.estimatedTime) || 0)
      )
      .reduce((a, b) => a + b, 0);

    set({ estimatedTime: sum, moduleSpecificLessons: moduleSpecificLesson });
  },

  getLearningContent: async (token, level) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/sendlearningcontent/${level}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        return console.log("Error fetching data.");
      }

      const data = await response.json();
      console.log("fetched data for learning modules: ", data);
      set({
        domain: data.domain,
        courses: data.course,
        modules: data.module,
        lessons: data.lesson,
        learningContent: data.learningContent,
        loading: false,
      });

      get().getEstimatedTime();
    } catch (error) {
      console.log(
        "Something went wrong, please try again.",
        "ErrorMessage: ",
        error.message,
        "Error: ",
        error
      );
    }
  },

  handleNextIndex: () => {
    const { modules, index } = get();
    let newIndex;
    if (index < modules.length - 1) {
      newIndex = index + 1;
    } else if (index === modules.length - 1) {
      newIndex = 0;
    }

    set({ index: newIndex });
  },

  handlePreviousIndex: () => {
    const { index } = get();

    let newPrevIndex;
    newPrevIndex = index - 1;
    set({ index: newPrevIndex });
  },
}));

export default useModuleStore;
