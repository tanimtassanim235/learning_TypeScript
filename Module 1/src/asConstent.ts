// type UserRoles = "Admin" | "Editor" | "Viewer";

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
} as const;


/* 

for normal use

keyof typeof UserRoles
'Admin' | 'Editor' | 'Viewer'

..............

for capital value ADMIN, EDITOR ...

UserRoles['Admin'] >>> "ADMIN"

typeof UserRoles[keyof typeof UserRoles]

user["id"] = 212


*/

const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
