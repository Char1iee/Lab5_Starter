// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number1', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('valid phone number2', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('invalid phone number3, missing -', () => {
  expect(isPhoneNumber('(123)4567890')).toBe(false);
});

test('invalid phone number4, missing -', () => {
  expect(isPhoneNumber('4567890')).toBe(false);
});

test('valid email1', () => {
  expect(isEmail('abc@ucsd.edu')).toBe(true);
});

test('valid email2', () => {
  expect(isEmail('A123abc@Gmail.COM')).toBe(true);
});

test('invalid email3, missing @', () => {
  expect(isEmail('abcucsd.edu')).toBe(false);
});

test('invalid email4, missing .', () => {
  expect(isEmail('abc@ucsd')).toBe(false);
});

test('Strong Password1', () => {
  expect(isStrongPassword('A123')).toBe(true);
});

test('Strong Password2', () => {
  expect(isStrongPassword('aabbcc')).toBe(true);
});

test('Not Strong Password3, not start with alphabet', () => {
  expect(isStrongPassword('123456')).toBe(false);
});

test('Not Strong Password4, not enough length', () => {
  expect(isStrongPassword('A1')).toBe(false);
});

test('Valid Date1', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('Valid Date2', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

test('InValid Date3, year error', () => {
  expect(isDate('1/1/24')).toBe(false);
});

test('InValid Date4, Date and Month error', () => {
  expect(isDate('100/100/2024')).toBe(false);
});


test('Valid HexColor1', () => {
  expect(isHexColor('#123456')).toBe(true);
});

test('Valid HexColor2', () => {
  expect(isHexColor('#Ab0')).toBe(true);
});

test('InValid HexColor3, length error', () => {
  expect(isHexColor('#1')).toBe(false);
});

test('InValid HexColor4, alphabet error', () => {
  expect(isHexColor('#12H')).toBe(false);
});
