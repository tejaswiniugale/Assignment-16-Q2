import { pipe } from 'rxjs';
import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });

  it('adds two numbers correctly' , () => {
    expect(pipe.transorm(5, 3)).toEqual(8);
    expect(pipe.transform(-1, 1)).toEqual(0);
    expect(pipe.transform(0, 0)).toEqual(0);
  });
});
