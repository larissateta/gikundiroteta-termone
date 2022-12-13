package com.example.mycalculator_backend.serviceImp;
import org.testng.annotations.Test;


import com.example.mycalculator_backend.servicesImpl.DoMathServiceImpl;

import static org.testng.Assert.assertEquals;


public class DoMathImpTest {
    DoMathServiceImpl service = new DoMathServiceImpl();

    @Test
    public void add_success() throws DoMathServiceImpl.InvalidOperationException {
        double op1= 1;
        double op2= 4;
        String operation= "+";
        double actualResult = service.doMath(op1, op2, operation);
        assertEquals(5, actualResult);
    }
    @Test
    public void multiply_success() throws DoMathServiceImpl.InvalidOperationException {
        double op1= 1;
        double op2= 4;
        String operation= "*";
        double actualResult = service.doMath(op1, op2, operation);
        assertEquals(4, actualResult);
    }
    @Test
    public void division_success() throws DoMathServiceImpl.InvalidOperationException {
        double op1= 1;
        double op2= 4;
        String operation= "/";
        double actualResult = service.doMath(op1, op2, operation);
        assertEquals(5, actualResult);
    }
    @Test
    public void substraction_success() throws DoMathServiceImpl.InvalidOperationException {
        double op1= 1;
        double op2= 4;
        String operation= "-";
        double actualResult = service.doMath(op1, op2, operation);
        assertEquals(-3, actualResult);
    }
}
