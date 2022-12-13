package com.example.mycalculator_backend.services;

import com.example.mycalculator_backend.servicesImpl.DoMathServiceImpl;

public interface DoMathService {

    double doMath(double operand1, double operand2, String operation) throws DoMathServiceImpl.InvalidOperationException;

}
