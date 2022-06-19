
export interface ICreateUserDTO {
  name: string;
  rfid: string;
  contract_init: string;
}

export interface ICreateUserToDbDTO {
  name: string;
  rfid: string;
  contract_init: Date;
  admin_id: string;
}

