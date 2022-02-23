export interface UserInterface {
  login: string;
  getData?: () => string;
  setData?: (typedLogin: string) => void;
  removeData?: () => void;

}
