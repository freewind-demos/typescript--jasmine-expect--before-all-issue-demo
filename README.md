TypeScript "jasmine-expect" "beforeAll" Issue Demo
===================================================

Using jasmine-expect in `beforeAll` (which doesn't be included in `describe`) will throw exception. 

```
npm install
npm test
```

throws:

```
Suite error: undefined
  Message:
    TypeError: expect(...).toBeSameLengthAs is not a function
  Stack:
        at <Jasmine>
        at UserContext.beforeAll (/dev/typescript--jasmine-expect--before-all-issue-demo/spec/hello-spec.ts:4:19)
        at <Jasmine>
        at runCallback (timers.js:781:20)
        at tryOnImmediate (timers.js:743:5)

```
