# SearchspringTakeHome

https://searchspring.zendesk.com/hc/en-us/sections/115000119223-Search-API

You can ignore the "Request Headers" section of any of the API documentation. You should only need to use "q", "resultsFormat" and "page" query parameters.

We don’t expect you to build out a full implementation we just need the following:

    An input box for a search bar with a search button next to it.
    When someone types into the search bar and hits enter or clicks the search button display product results below the search bar.
        Use site ID “scmq7n” for this example.
        You’ll want to use “resultsFormat=native” as part of the API request to get your results back as JSON.
        You’ll want to pass the search query using the “q” parameter.
        Display the product image using the “thumbnailImageUrl”, the product “name” and “price”.
        If the product has an “msrp” field and it’s greater than “price” field, display the “msrp” next to the price crossed out.
    Above and below the results show pagination with next and previous buttons. You could also display some pages before/after the current page.
        If you’re on the first page, you shouldn’t show the previous button or it should be disabled.
        If you’re on the last page, you shouldn’t show the next button or it should be disabled.
        You’ll be able to change the page by making another request to our Search API with the “page” parameter set to the page you’d like to request.
    I’ve included a sample search request below that does a search for jeans and gets the 2nd page of results.
        http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=jeans&resultsFormat=native&page=2
    Allow your creativity to shine for the design. It doesn’t not have to be the sole focus, but we would like to see what you’re capable of. If you want to see an example of what a full integration looks like see the following links:
        https://condescending-bassi-4d660a.netlify.app
        https://shopily.netlify.app

You can use whatever JS frameworks or CSS libraries you’d like. We’ll not only be reviewing the JS functionality, but also the design. We’re eagerly awaiting to see what you can come up with. If you need any help or guidance, please don't hesitate to ask.

You can deliver this challenge to us by deploying the challenge somewhere on the web (Github Pages, Netlify, etc) and send us a link to a repository with your code.

There is no hard timeline, so feel free to take as much time as you'd like. Some people take up to a week; some people take a day or two. However, completing the challenge does determine whether we move forward in the interview process or not.