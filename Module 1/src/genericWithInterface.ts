interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };

  smartWatch: T;
}

interface WatchWithoutBrand {
  heartRate: string;
  stopwatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const richDeveloper: Developer<AppleWatch> = {
  name: "MR. Rich",
  salary: 80,
  device: {
    brand: "Apple",
    model: "MacBookA32",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "300",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
};

const poorDeveloper: Developer<WatchWithoutBrand> = {
  name: "MR. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A32",
    releasedYear: "2011",
  },
  smartWatch: {
    heartRate: "300",
    stopwatch: true,
  },
};
