import test from 'node:test';import assert from 'node:assert/strict';import {validateEvent} from '../src/validation.js';
const good={title:'小組討論',date:'2026-10-19',start:'10:00',end:'11:00'};
test('valid and trimmed titles',()=>{assert.equal(validateEvent(good),'');assert.equal(validateEvent({...good,title:' 討論 '}),'');});
test('blank title rejected',()=>assert.notEqual(validateEvent({...good,title:'   '}),''));
test('reversed and equal times rejected',()=>{assert.notEqual(validateEvent({...good,end:'09:00'}),'');assert.notEqual(validateEvent({...good,end:'10:00'}),'');});
test('one-minute boundary accepted',()=>assert.equal(validateEvent({...good,end:'10:01'}),''));
test('malformed and impossible dates rejected',()=>{for(const date of ['','2026-02-30','2026-13-01'])assert.notEqual(validateEvent({...good,date}),'');assert.notEqual(validateEvent({...good,start:'25:00'}),'');});
