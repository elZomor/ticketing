import { FC } from 'react';

interface IRoute {
  path: string;
  public?: boolean;
  component: FC;
}
// TODO: To be implemented
// interface IDynamicRoute extends IRoute {
//   getPath: (param: string | number) => string;
// }

export default interface IRoutes {
  about: IRoute;
  home: IRoute;
  theaterScripts: IRoute;
  // theaterScriptDetails: IDynamicRoute;
  theaterScriptDetails: IRoute;
  shows: IRoute;
  // showDetails: IDynamicRoute,
  showDetails: IRoute;
  theaters: IRoute;
  // theaterDetails: IDynamicRoute,
  theaterDetails: IRoute;
  podcasts: IRoute;
}
