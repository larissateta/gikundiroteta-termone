package com.example.mycalculator_backend.dto;

import com.example.mycalculator_backend.servicesImpl.DoMathServiceImpl;
import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;

public class DoMathRequestTest {
    DoMathRequest mathOperator = new DoMathRequest(5, 2, "*");
    @Test
    public void getOperand1(){
        assertEquals(5.0, mathOperator.getOperand1());
    }
    @Test
    public void getOperand2(){
        assertEquals(2.0, mathOperator.getOperand2());
    }
    @Test
    public void getOperation(){
        assertEquals("*", mathOperator.getOperation());
    }
}
