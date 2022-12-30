class Gift {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public purchased: boolean,
    public affiliatedUrl: URL,
    public createdAt: number = Date.now(),
  ) {
  }
}

interface URL {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  readonly origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;

  toString(): string;
}

class ObjectURLOptions {
}

declare var URL: {
  prototype: URL;
  new(url: string, base?: string): URL;
  createObjectURL(object: any, options?: ObjectURLOptions): string;
  revokeObjectURL(url: string): void;
};

export class User {
  constructor(
    public uuid: string,
    public username: string,
    // public followersId: string[],
    // public followingId: string[],
    // public gifts: Gift[],
    // public isOnline: boolean = false,
    public createdAt: null | number = Date.now(),
    // public updatedAt: null | number = Date.now() || createdAt,
    // public lastTimeOnnline: null | number = Date.now() || createdAt,
    // public profilePicture: string,
    // public profileUrl: URL,
    // public email: string,
    // public password?: string
  ) {

  }
}
