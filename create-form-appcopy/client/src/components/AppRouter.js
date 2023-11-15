import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { FORM_ROUTE } from '../utils/consts';
import { USER_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const isAuth = false; // Replace this with your authentication logic

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path={FORM_ROUTE} element={<Navigate to={FORM_ROUTE} />} />
      <Route path="*" element={<Navigate to={USER_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;



// import React, {useContext} from 'react';
// import {Switch, Route, Redirect} from 'react-router-dom'
// import {authRoutes, publicRoutes} from "../routes";
// import {FORM_ROUTE} from "../utils/consts";
// //import {Context} from "../index";
// //import {observer} from "mobx-react-lite";

// const AppRouter = () => {
//     //const {user} = useContext(Context)
//     const isAuth = false

//     //console.log(user)
//     return (
//         <Switch>
//             {isAuth && authRoutes.map(({path, Component}) =>
//                 <Route key={path} path={path} component={Component} exact/>
//             )}
//             {publicRoutes.map(({path, Component}) =>
//                 <Route key={path} path={path} component={Component} exact/>
//             )}
//             <Redirect to={FORM_ROUTE}/>
//         </Switch>
//     );
// };

// export default AppRouter;