import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
  private static final Scanner scanner = new Scanner(System.in);

  public static boolean isBalanced(String expression){
    Stack<Character> s = new Stack<>();
    char[] characters = expression.toCharArray();
    for(char character : characters){
      if( character == '{' ){
        s.push('}');
        continue;
      }else if( character == '[' ){
        s.push(']');
        continue;
      }else if( character == '(' ){
        s.push(')');
        continue;
      }else{
        if(s.empty() || character != s.peek()){
          return false;
        }
        s.pop();
      }
    }
    return s.empty();
  }

  public static void main(String[] args) {
    int t = scanner.nextInt();
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

    for (int tItr = 0; tItr < t; tItr++) {
      String expression = scanner.nextLine();
      System.out.println(isBalanced(expression) ? "YES" : "NO");
    }

    scanner.close();
  }
}