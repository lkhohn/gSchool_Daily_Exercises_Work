package warmup;

import warmup.*;

public class ShapeRunner{
  public static void main(String [] args){
    ArrayList<Shape> shapeList = new ArrayList<Shape>();
     shapeList.add(new Rectangle(5, 8));
     shapeList.add(new Square(10));

     float total = 0;

     for(Shape currentShape: shapeList){
       System.out.println(currentShape.getClass() + ": " + currentShape.calculateArea());
       total += currentShape.calculateArea();
     }
     System.out.println("Total: " + total);
  }
}
