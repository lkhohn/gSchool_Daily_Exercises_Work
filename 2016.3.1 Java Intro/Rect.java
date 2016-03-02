public class Rect{

  public int width;
  public int length;

  public Rect(int width, int length){
    this.width = width;
    this.length = length;
  }

  public int area(){
    return this.length * this.width;
  }

  public static void main(String [] args){
    Rect newRect = new Rect(2,2);
    System.out.println(newRect.area());

  }
}

// access modifier
// -top level (class)
//   -public - the outside world can see this class and utilize it
//   -default - package private
// -Member level (methods and instance/class variables)
//   -public - the outside world can see this variable/method and utilize it
//   -protected - the outside world cannot see this variable/method nor use it. Subclasses can access their parent's protected variables
//   -private - the outside world cannot see this variable/method nor use it.
//   -default - class and package can use but cannot be subclassed and the world cant see it
