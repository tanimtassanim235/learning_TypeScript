// union means or in c , c++

type UserRule = 'admin' | 'user'

const getDashboard = (role: UserRule) => {
    if(role === 'admin')
    {
        return 'Admin Dashboard'
    }
    else if(role === 'user')
    {
        return 'User dashboard'
    }
    else
    {
        return 'guest dashboard'
    }
}


// intersection &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
    id: '123',
    name: 'Tanim',
    phoneNo: '01222222',
    designation: 'Manager',
    teamSize: 80
}