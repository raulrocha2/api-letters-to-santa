import { randomUUID } from "crypto";

export class SantaEntity {

  id: string;

  login: string;

  password: string;

  token: string;

  created_at: Date;

  updated_at: Date;


  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}