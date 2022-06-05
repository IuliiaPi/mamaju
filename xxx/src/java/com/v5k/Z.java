package com.v5k;

import java.util.Arrays;
import java.util.List;

public class Z {

    public static void main(String[] args) {
        List<Integer> l = Arrays.asList(1, 2, 3, 2, 1, 1, 2);
        Integer reduce = l.stream().reduce(0, (a, e) -> {
            if (a > e) {
                return e;
            } else {
                return a;
            }
        });
        System.out.println(reduce);
    }

}
