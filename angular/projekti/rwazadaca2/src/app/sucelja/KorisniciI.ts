export interface KorisniciI {
  id: Number;
  korime: String;
  lozinka: String;
  ime: String;
  prezime: String;
  email: String;
  token: String;
  sol: String;
  uloga_id: Number;
  aktiviran: Number; // makni
  blokiran: Number;
  tajniTOTPkljuc: String; // makni
}
