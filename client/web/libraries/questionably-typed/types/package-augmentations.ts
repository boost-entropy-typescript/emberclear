import './libraries/ember';
import './libraries/promise-worker-bi';
import './libraries/blakejs';

declare module 'ember-concurrency-test-waiter/define-modifier' {
  const foo: any;
  export default foo;
}

declare module 'ember-raf-scheduler/test-support/register-waiter' {
  const foo: any;
  export default foo;
}
