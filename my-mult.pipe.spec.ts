import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });

  it('multiplies two numbers correctly', () => {
    expect(pipe.transform(5, 3)).toEqual(15);
    expect(pipe.transform(-1, 1)).toEqual(-1);
    expect(pipe.transform(0, 100)).toEqual(0);
  });



});
