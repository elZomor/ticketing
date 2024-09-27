import { FC, lazy, LazyExoticComponent } from 'react';
import IRoutes from './RoutesModel.tsx';

type Model = (module: { AboutUs: FC; Home: FC; ComingSoon: FC }) => {
  default: FC;
};

const pageMapping: Record<string, Model> = {
  AboutUs: (module) => ({ default: module.AboutUs }),
  Home: (module) => ({ default: module.Home }),
  ComingSoon: (module) => ({ default: module.ComingSoon }),
};

const buildImport = (page: keyof typeof pageMapping): LazyExoticComponent<FC> =>
  lazy(() => import('../pages').then(pageMapping[page]));

export const routes: IRoutes = {
  about: {
    path: '/about',
    public: true,
    component: buildImport('AboutUs'),
  },
  home: {
    path: '/',
    public: true,
    component: buildImport('Home'),
  },
  theaterScripts: {
    path: '/theater-scripts',
    public: true,
    component: buildImport('ComingSoon'),
  },
  theaterScriptDetails: {
    path: '/theater-scripts/:id',
    public: true,
    component: buildImport('ComingSoon'),
  },
  shows: {
    path: '/shows',
    public: true,
    component: buildImport('ComingSoon'),
  },
  showDetails: {
    path: '/shows/:id',
    public: true,
    component: buildImport('ComingSoon'),
  },
  theaters: {
    path: '/theaters',
    public: true,
    component: buildImport('ComingSoon'),
  },
  theaterDetails: {
    path: '/theaters/:id',
    public: true,
    component: buildImport('ComingSoon'),
  },
};
