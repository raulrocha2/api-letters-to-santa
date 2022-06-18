import { randomUUID } from "crypto";

export class LetterEntity {

  id: string;

  first_name: string;

  last_name: string;

  address: string;

  zip_code: string;

  state: string;

  city: string;

  country: string;

  body_letter: string;

  was_read: boolean;

  approved: boolean;

  created_at: Date;


  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.was_read = false;
      this.approved = false;

    }
  }
}