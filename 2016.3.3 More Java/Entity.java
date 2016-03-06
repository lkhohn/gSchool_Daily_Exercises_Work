package warmup;

import warmup.*;


public abstract class Entity {
  public abstract String size();
  public abstract boolean isDead();
  public abstract boolean isSleeping();
  public abstract int weight();
  public void eat(){
    weight();
  }
  public void sleep(){
    isSleeping();
  }
  public void poop(){
    weight();
  }
  public void act(){

  }
  public void die(){
    isDead();
  }

}
