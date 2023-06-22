import React from 'react';
import './App.scss';
import MainPage from './components/MainPage';

// interface Props {
//   onClick: () => void;
// }

// export const Provider: React.FC<Props> = React.memo(
//   ({ onClick, children }) => (
//     <button
//       type="button"
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   ),
// );

export const App: React.FC = () => {
  return (
    <div className="starter">
      <MainPage />
      {/* <Provider onClick={() => ({})}>
      </Provider> */}
    </div>
  );
};
