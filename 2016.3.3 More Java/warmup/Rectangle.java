package warmup;

public class Rectangle extends Shape {
  protected float x;
  protected float y;
  public Rectangle(float x, float y){
    this.x = x;
    this.y = y;
  }
    public float calculateArea(){
      return this.x * this.y;
    }
    public static void main(String [] args){
      Rectangle theName = new Rectangle(1, 2);
    }
}
