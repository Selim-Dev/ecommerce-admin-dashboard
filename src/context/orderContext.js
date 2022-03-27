// import { getUsers } from '../apis/users';
// import React, { useEffect, useState, useMemo } from 'react';
// import { v4 as uuid } from 'uuid';

// export const UsersContext = React.createContext();

// export function UsersProvider({ children }) {
//   const [users, setUsers] = useState([]);
//   const [edit, setEdit] = useState(null);

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = (id) => {
//     setEdit(id);
//     setOpen(true);
//   };
//   const handleClose = () => setOpen(false);

//   useEffect(() => {
//     getUsers().then(setUsers);
//   }, []);
//   const addUser = (newUser) => {
//     const { name, email, phone, address } = newUser;
//     setUsers((oldUsers) => [
//       ...oldUsers,
//       { id: uuid(), name, email, phone, address: { ...address } },
//     ]);
//   };
//   const editUser = (editedUser, id) => {
//     const { name, email, phone, address } = editedUser;
//     setUsers((oldUsers) =>
//       oldUsers.map((user) =>
//         user.id === +id
//           ? { id: uuid(), name, email, phone, address: { ...address } }
//           : user
//       )
//     );
//   };
//   const deleteUser = (id) => {
//     setUsers((oldUsers) => oldUsers.filter((user) => user.id !== +id));
//   };
//   const contextValue = useMemo(
//     () => ({
//       users,
//       open,
//       setOpen,
//       handleOpen,
//       handleClose,
//       addUser,
//       editUser,
//       edit,
//       setEdit,
//       deleteUser,
//     }),
//     [users, open, handleOpen, handleClose, edit]
//   );
//   return (
//     <UsersContext.Provider value={contextValue}>
//       {children}
//     </UsersContext.Provider>
//   );
// }
