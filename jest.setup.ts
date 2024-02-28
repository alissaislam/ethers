
declare namespace jest {
    interface Matchers<R> {
       toBeWithinOneMinuteOf(date: Date): R;
    }
   }
   