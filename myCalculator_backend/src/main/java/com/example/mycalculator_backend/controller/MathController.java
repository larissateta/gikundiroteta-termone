package com.example.mycalculator_backend.controller;

import com.example.mycalculator_backend.dto.DoMathRequest;
import com.example.mycalculator_backend.services.DoMathService;
import com.example.mycalculator_backend.servicesImpl.DoMathServiceImpl;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MathController {

    DoMathServiceImpl service = new DoMathServiceImpl();
    @PostMapping("/evaluate")
    public ResponseTransfer MathOperator (@RequestBody DoMathRequest request) throws DoMathServiceImpl.InvalidOperationException {
        Double calcResponse = service.doMath(request.getOperand1(), request.getOperand2(), request.getOperation());
        return new ResponseTransfer(calcResponse);
    }

}
