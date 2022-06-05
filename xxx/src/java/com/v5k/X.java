package com.v5k;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class X {

    public static void main(String[] args) {
        go(str -> System.out.println(str));
        String x = "z";
        go(str -> System.out.println(x));

        List<Integer> integers = Arrays.asList(1, 2, 3);
        integers.forEach(System.out::println);
        integers.forEach(X::fire);
        X z = new X();
        integers.forEach(z::print);


    }

    private void print(int i) {
        System.out.println(i);
    }

    private static void fire(int i) {
        System.out.println(i);
    }

    private static void go(Consumer<String> consumer) {
        consumer.accept("X");
    }
}
