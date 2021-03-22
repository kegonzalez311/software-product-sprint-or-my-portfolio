package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns HTML that contains the page view count. */
@WebServlet("/hi")
public class PortfolioServlet extends HttpServlet {

    private  ArrayList<String> phrases;
    private static final long serialVersionUID = 1L;

    @Override
    public void init(){
        phrases = new ArrayList<>();
        phrases.add("Same");
        phrases.add("Mood");
        phrases.add("OMG");
    }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    response.setContentType("text/html;");
    PrintWriter out = response.getWriter();
    out.println("Is it ever gonna change? Am I gonna feel this way forever?");
    out.println("Are you gonna be around for me to count on?"); 
    out.println("Is it ever gonna change? Am I gonna feel this way forever?");
    out.println("Are you gonna be around for me to count on? Count on");
    out.println("On-on-on, on-on-on-on-on");

    // Convert ArrayList to JSON
    response.setContentType("application/json;");
    response.getWriter().println(convertToJsonWithGSon(phrases));
}

  /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  private String convertToJsonWithGSon(ArrayList messages) {
      Gson gson = new Gson();
      String json = gson.toJson(messages);
      return json;
  }
}