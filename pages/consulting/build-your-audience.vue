<template>
  <div id="app">
    <section class="studySection bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h3><span>30 Min Session:</span>Learn to build your audience in 60 min a day using LinkedIn and LinkedIn Sales Navigator</h3>
          <div class="col2 s-textRow">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/workshops/build-audience.svg`"></div>
            </div>
            <div class="col">
              <h5>Technology is essential, but it does not replace the human connection, and it is the human connection that sells.</h5>
              <p>Business owners and leaders need to find the right balance between using technology and spending time connecting with their networks personally. Automation is not the answer. Learning how to use the right tools efficiently will enable spending less time online and more time on business and customers.</p>
              <p>We’ll share proven tactics to help you leverage your LinkedIn connections and Linkedin Sales Navigator to build engagement and grow your audience. Believe it or not, most people can fit these techniques into a single focused hour of their day. </p>
              <p>These techniques will change the way you view digital relationships and teach you to maintain a personal touch, even if you can’t easily meet for coffee. <strong>We believe these practices are so fundamental to doing business that we’re offering this session free of charge.</strong></p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow" >
            <div class="col">
              <h4>What you'll learn:</h4>
              <ol>
                  <li>How to create a blended (virtual and in-person) approach to building and nurturing relationships that work for you.</li>
                  <li>The daily and weekly activities needed to effectively manage and nurture your relationships.</li>
                  <li>How to efficiently engage with prospects and your network online. </li>
                  <li>The role your marketing team should play to support your efforts.</li>
                </ol>
            </div>
            <div class="col">
              <h4>You'll be able to:</h4>
              <ol>
                  <li>Use asynchronous communication to nurture your professional network between face to face meetings.</li>
                  <li>Scale your ability to talk with real people without mass automation.</li>
                  <li>Spend as little as 1 hour a day using technology to enhance your existing relationships building activities.</li>
                </ol>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-gold s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Would you like to learn how to apply these techniques to your network?</span> <a href="https://app.hubspot.com/meetings/garrio/executive-briefing" class="button">Schedule a free session</a>
        </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow" >
            <div class="col">
              <h4>Before session:</h4>
              <p>Please be sure to have Linked Sales Navigator attached to your Linkedin account. We'll discuss how to best configure and utilize it in our session.</p>
              <p>Also please spend a few moments before our session preparing to discuss:</p>
              <ol>
                  <li>How do you use Linkedin today</li>
                  <li>When is your most creative part of the day</li>
                  <li>How would you rate your comfort level with social platforms</li>
                  <li>How you’ve built your most successful client relationships</li>
                  <li>What information your best clients find useful</li>
              </ol>
            </div>
            <div class="col">
              <h4>Helpful resources</h4>
              <ul>
                <li>Tools: <a href="https://business.linkedin.com/sales-solutions">LinkedIn Sales Navigator</a></li>

                <li>Book: <a href="https://www.amazon.com/Billion-Dollar-Tweet-Getting-Sidelines-ebook/dp/B071RMCT1Q/">The 4 Billion Dollar Tweet: A Guide for Getting Leaders Off the Social Sidelines</a></li>
                <li>Book: <a href="https://www.amazon.com/Social-Selling-audiobook/dp/B07RH52K4P">Social Selling: Techniques to Influence Buyers and Changemakers</a></li>
                <li>Book: <a href="https://www.amazon.com/Social-Media-Success-Every-Brand/dp/1400214963/">Social Media Success for Every Brand: The Five StoryBrand Pillars That Turn Posts Into Profits</a></li>
                
              </ul>
            </div>
          </div>
      </div>
    </section>


    <!-- <section class="studySection bg-ltGray s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Need more details about what's discussed or want customization?</span> <nuxt-link class="button" to="#contact">Please Contact Us</nuxt-link>
        </div>
      </div>
    </section> -->

    <section class="studySection s-facilitator bg-darkGray">
      <div class="pageWidth">
          <div class="col3 s-textRow">
            <div class="col double">
              <h4>About the facilitator</h4>
              <p>I’ve witnessed technology changing the ways we nurture business relationships. However, we still need to create meaningful connections to move our on and offline  business relationships forward.</p>
              <p>I believe that technology doesn't have to replace how we interact in person; it should enhance how we connect.</p>
              <p>I've spent over a decade collaborating with business owners, executives, and clients to make social platforms work for them. I focus on connecting the dots between social media, sales activities, advertising trends, revenue goals, and, most importantly, their time. The results are scalable marketing systems designed to help effectively nurture the business relationships that matter without sacrificing time or resources that could be spent on other high-impact activities. </p>
              <p>Rest assured that what you learn will work! It’s the process I use myself.</p>
              <p>Find me on <a href="https://www.linkedin.com/in/garrioharrison/">Linkedin</a>.</p>
            </div>
            <div class="col">
              <h5>Garrio Harrison</h5>
              <div class="responsiveImage" v-lazy:background-image="`/workshops/garrio.png`"></div>
            </div>
          </div>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  components: {
  },
  head () {
    return {
      title: 'Curious: Coaching - Learn to build your audience in 60 min a day',
      meta: [
        // { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

        // { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },

        { hid: 'og:title', name: 'og:title', content: 'Curious: Coaching - Learn to build your audience in 60 min a day' },
        { hid: 'og:description', name: 'og:description', content: "You don't need to spend endless hours increasing your connections. We'll show you how to leverage Linkedin to grow your influence and build your network in less than an hour a day." },

         { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/workshops/build-audience.png' },
         { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
         { hid: 'og:image:width', name: 'og:image:width', content: '1168' },
         { hid: 'og:image:height', name: 'og:image:height', content: '1034' },
      ]
    }
  },
}
</script>

<style></style>
