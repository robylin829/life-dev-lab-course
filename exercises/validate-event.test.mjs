import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEvent } from './validate-event.js';
test('有效行程：接受',()=>assert.equal(validateEvent('讀書','10:00','11:00'),''));
test('空白名稱：拒絕',()=>assert.notEqual(validateEvent('   ','10:00','11:00'),''));
test('結束早於開始：拒絕',()=>assert.notEqual(validateEvent('讀書','11:00','10:00'),''));
test('開始等於結束：拒絕',()=>assert.notEqual(validateEvent('讀書','10:00','10:00'),''));
