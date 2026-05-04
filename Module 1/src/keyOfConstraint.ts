// keyof : type operator

type RichVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVeh = keyof RichVehicle;