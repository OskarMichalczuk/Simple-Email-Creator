const linkTemplates = [
    {re: '{Original subject}',
     text:`Hey <strong>{Name}</strong>,

     How are you doing?
     
     Last time we spoke, you were really interested in {link exchange}.
     
     Are you still interested?
     
     If so, {reiterate the initial discussion}.
     
     Talk soon,
     
     {Sign-off}`},
     {re: `Questions about (site name)`,
      text: `Hi {First Name},

      We’d love to be featured in {Article/post name with a link to it}. Our {content} might be useful for your audience.
      
      We can discuss the conditions of this collaboration via email or phone – whichever works best for you.
      
      Let me know what you think.
      
      {Sign-off}`},
      {re: `Updating {page name}`,
      text: `Hello {Name},

      I’m reaching out to follow up on the possibility of {updating/adding the link} to {Page Title} on {website}.
      
      I think we’re a great fit for {page} because (describe what value does your link provide them with).
      
      Let me know what you think,
      
      {Sign-off}`},
      {re: `{Original subject}`,
      text: `Hey {Name},

      I know you’re busy managing {website name}. And removing a broken link is something that may take too much of your precious time.
      
      But still, here’s why you should remove bad links from your content:
      
      According to Moz, if you have a 404 error you’re losing out on a huge chance to get your content ranked.
      
      BlizzardPress recently removed all of their 404 errors, and almost instantly climbed up 1713 spots.
      
      I have a list of link suggestions to fill the gaps.
      
      (insert all of their dead links and your suggestions)
      
      Talk soon,
      
      {Sign-off}`}
]

const contentTemplates = [
    {re: '{Original subject}',
    text:`Hi {Name},

    Just a friendly follow-up. Were you interested in the article on {topic}? I’m sure your inbox gets bombarded daily, so no hard feelings if you’re too busy. It just got me thinking…
    
    If {name} saw value in {competitor company’s} article, then {name} will definitely want a unique take on the topic.
    
    Not trying to get anything from you. Just trying to impress!
    
    Cheers,
    
    {Sign-off}`},
    {re: '{Original subject}',
    text:`Hi {Name},

    I sent you some headline ideas last week. Have you had a chance to look at them?
    
    I’m really excited to write for {Website Name}, so I outlined the first post this morning.
    
    See it here: {Outline Link}
    
    What do you think?
    
    Let me know if you’d like me to add/remove something.
    
    Cheers,
    
    {Sign-off}`},
    {re: '{Original subject}',
    text:`Hi {Name},

    I’m really excited to get started with you on this article, so I took a pass at outlining the article this morning to get your feedback on the direction it’s starting to go in.
    
    Check it out: {Google Doc Link}
    
    Cheers,
    
    {Sign-off}`},
    {re: 'We’ve featured {Their website} in our post',
    text:`Hello {Name},

    Just a heads-up that we’ve mentioned your article on {topic} in our latest article.
    
    {Your post’s URL}
    
    Your research is very informative and I am quite fond of your style, and so is my audience. If you have time, I would love to hear what you think.
    
    Thank you,
    
    {Sign-off}`}

]

const digitalTemplate = [
    {re: 'Follow-up on {Case study pitch}',
    text:`Hi {Name},

    I know you’re super busy and there’s a chance my last email got buried. Regarding the case study I sent over, we have a new exclusive interview to go along with that.
    
    Some interesting things discussed:
    
    • (Interesting point 1)
    
    • (Interesting point 2)
    
    • (Interesting point 3)
    
    Let me know if you’d like to feature it. I’ll link the case study again here.
    
    {Sign-off}`},
    {re: 'Follow up on {original subject}',
    text:`Hi {Name},

    Your piece called {article title} this week in {publication} got me thinking, (share what you took away from their work).
    
    Have you had the chance to look at the pitch I sent over a couple of days ago? I think the story could resonate with your audience (explain how). I’d be happy to get you the details.
    
    Thanks,
    
    {Sign-off}`},
    {re: 'New infographic about {topic}',
    text:`Hi {Name},

    I know you’re busy, and my previous email probably got buried in your inbox, but I was wondering if you’ve had the chance to take a look at the infographic I sent you last week?
    
    Here’s a brief summary of what it covers:
    
    (Describe what your infographic is about)
    
    I think it would be interesting for your audience because (elaborate why).
    
    Let me know what you think about it!
    
    {Sign-off}`},
    {re: '{Original subject}',
    text:`Hi {Name},

    We haven’t been able to connect regarding my earlier messages but that’s ok—I’m sure it’s a busy time for you.
    
    Let me just leave this behind for you in case you get around to it later. I originally wrote to you regarding (subject). We’ve got some really interesting information for your readers, including:
    
    -(Example)
    -(Example)
    -(Example)
    
    All the details about this particular topic along with information about us can be found in our online newsroom, here. We’re ready to help in any way we can if you’d like to learn more.
    
    Thanks again and I hope I can reach out to you the next time we’d like to share information that your readers would find engaging.
    
    {Sign-off}`}
]

const colabTemplate = [
    {re: '{Their name} + {your company} = collaboration?',
    text:`Hi {Name},

    I know you’re very selective about the companies you work with, that’s why I only wanted to reach out to assure you that the co-marketing I offer will bring a lot of value to you and your audience.
    
    Here are a few examples of our recent successful collaborations with high-authority resources:
    
    {Examples}
    
    Looking forward to your response,
    
    {Sign-off}`},
    {re: 'Following up on a collaboration possibility with {company}',
    text:`Hi {Name},

    I’ve tried to reach you a few times as I am really thrilled about the possible partnership with your resource but haven’t heard back which tells me one of two things:
    
    1) You’re too busy and my email is buried deep within your cluttered inbox.
    
    2) You are not the right person to contact on this matter.
    
    Please let me know which of my ideas is correct and who is the right person at stfalcon to talk about the partnership.
    
    {Sign-off}`},
    {re: 'Next steps?',
    text:`Hi {Name},

    Quick follow-up, as promised! It was great to connect and talk shop.
    
    Should you decide to give us a green light, here are the next steps.
    
    {Next steps}
    
    Take care,
    
    {Sign-off}
    
    `},
    {re: 'Contribution to your world, {Name}',
    text:`Hey {Name},

    How’s it going, my friend? Hope you’re prospering.
    
    Listen, you know by now I’m a huge fan of your work. You’ve been pushing some hard cold facts and truths on LinkedIn … and I, so much so, respect you for it.
    
    It hit me the other day… why not reach out and see if you’d be up to take things to the next level.
    
    (Describe one of their pain points)
    
    Here’s how I can help you with this: (describe your collaboration offer).
    
    Let me know your thoughts on this, {Name}. Would love to see us join forces.`}
    


]

const buisnessTemplate = [
    {re: '{Original subject}',
    text:`Hi {Name},

    A few weeks ago, I sent in a query with a couple of feature article ideas to write for your resource. As I mentioned earlier, I have my sources lined up for interviews and I already have my preliminary research ready.
    
    I wanted to share that I have time available in my calendar for additional ideation or for getting started on an article, if that works for you.
    
    If you’d like to suggest alternative approaches to my topic or title suggestions, please let me know and I’ll gladly send some additional ideas.
    
    Best wishes,
    
    {Sign-off}`},
    {re: '{Original subject}',
    text:`Dear {Name},

    I really appreciated the opportunity to talk with you this week. I enjoyed hearing about your company’s vision and know that I could contribute to your ongoing success.
    
    In the interview, we briefly discussed {pain point}.
    
    I wanted to share some stats (attached) about the website redesign I led while working for {company name} and how it benefited them.
    
    {Stats of your work}
    
    Can I follow up with you again next week to see if you’ve made a decision on the candidates?
    
    Looking forward to talking soon,
    
    {Sign-off}`},
    {re: 'Pleasure to learn more about {Company Name}',
    text:`Dear {Hiring Manager’s Name},

    Thank you so much for taking the time to talk to me about the position of {the position you’re applying for} with {Company Name} this morning. It was a pleasure to learn more about your {innovative strategy / upcoming challenges / core values / industry insights}.
    
    The details you provided me with about the position convinced me that this is a job I would enjoy and one where I could make a valuable contribution with my skills and experience {refer to your specific area of expertise and how it can benefit your employer}.
    
    I was also thinking about what you said regarding {specific issue discussed during the interview}. In my last role as {your current or most recent position} I found that {data-backed explanation of how you would tackle the issue in question}.
    
    Finally, attached you will find the details of some of my projects we talked about. Please feel free to contact me if you find you need any more information. I look forward to our call next week as discussed.
    
    Thank you once again, {Hiring Manager’s Name}.
    
    Best regards,
    
    {Sign-off}`},
    {re: 'Response required: {Project name}',
    text:`Hi, {Name}

    Your risk analysis for {project name} was very helpful. Thank you for being so thorough.
    
    However, you’re behind on {phase of the project}. It was due {day}, and we need it finished as soon as possible so we can move on to the next phase of the project.
    
    Please let me know the revised completion date for {project phase} by the end of the day. If you’re having any difficulties with completing this stage, be sure to contact me. I will be happy to answer any questions you may have.
    
    Thank you for your prompt attention to this matter.
    
    {Sign-off}`}


]

const latePaymentTemplate = [
    {re: 'Invoice {number} is due today',
    text:`Hi {Name},

    This is just a reminder that payment on invoice {number} (total{sum}), which we sent on {date}, is due today. You can make payment to the bank account specified on the invoice.
    
    If you have any questions whatsoever, please reply and I’d be happy to clarify them.
    
    Thanks,
    
    {Sign-off}`},
    {re: 'Invoice {number} is one week overdue',
    text:`Hi {Name},

    Our records show that we haven’t yet received payment of {sum} for Invoice {number}, which is overdue by one week. I would appreciate it if you could check this out on your end.
    
    If the payment has already been sent, please disregard this notice. And if you’ve lost this invoice, please let me know, and I’d be happy to send you another copy.
    
    Thanks,
    
    {Sign-off}`},
    {re: 'Invoice {number} is two weeks overdue',
    text:`Hi {Name},

    I wrote to you several times to remind you of the pending amount of {sum} for invoice {number}. As another reminder, payment was due two weeks ago.
    
    If you have any queries regarding this payment, please let me know. I’ve also attached a copy of the invoice to this email, in case the original was lost or deleted.
    
    Could you reply to this message and let me know you’ve received it? Thank you.
    
    Regards,
    
    {Sign-off}`},
    {re: 'Invoice {number} from {date} is overdue—please send payment ASAP',
    text:`Hi {Name},

    This is another reminder that I have yet to receive the {sum} owed on invoice {number}. Please be aware that, as per my terms, I may charge you additional interest on payment received more than 30 days past its due date.
    
    Again, please reach out if you have any questions on this payment. Otherwise, please organize for settlement of this invoice immediately.
    
    Kind regards,
    
    {Sign-off}`}
]

    const meetingTemplate = [
        {re: '{Meeting title}',
        text:`Hello,

        This is a friendly reminder that we have a meeting booked on {date and time}.
        
        Looking forward to meeting you,
        
        {Sign-off}`},
        {re: 'A reminder for our upcoming meeting',
        text:`Hello, {Name}

        Just a friendly reminder about our upcoming meeting on {date and time}.
        
        I’ve included the copy of all details regarding the meeting below. I look forward to talking soon!
        
        {meeting details}
        
        {Sign-off}`},
        {re: 'Reminder-Your appointment on {date and time}',
        text:`Dear {Name},

        This is a friendly reminder confirming your appointment with {organizer} on {date and time}. Please try to arrive 15 minutes early and bring your {document}.
        
        If you have any questions or you need to reschedule, please call our office at {phone number}. Otherwise, we look forward to seeing you on {date and time}. Have a wonderful day!
        
        Warm regards,
        
        {Sign-off}`},
        {re: '{Customer name}, your next appointment is on {date and time}',
        text:`Dear {Name},

        We hope you’re doing well. We wanted to remind you that your next appointment with {organizer} is scheduled for {date and time}. We look forward to seeing you then.
        
        Please remember to bring your {relevant documents} and arrive on time.
        
        We truly care about your well-being, so if you have any questions or needs in advance of your appointment, you are welcome to call us anytime at {phone number}. One of our {job title} will get back to you as soon as possible.
        
        Warm regards,
        
        {Sign-off}`}



    ]

    const salesTemplate = [
        {re: 'Good news! Here’s that {information} you requested',
        text:`{Name},

        I’m writing to thank you for giving me the opportunity to speak to you on {day}.
        
        I have checked with our {accounting department/ boss/warehouse} and they would be very happy to arrange {special request}.
        
        Please let me know how you would like to proceed from here.
        
        {Sign-off}`},
        {re: 'Looking for more information?',
        text:`Hi {Name},

        I trust that you have had an opportunity to read my previous email and look at our website, so I figured it’d be worth checking in with you again.
        
        Have you given any additional thought to my proposal? I’d be happy to do a quick review of it on the phone and answer any and all questions you may have.
        
        When would suit you for a quick conversation?
        
        {Sign-off}`},
        {re: 'A few things you may not know about {company name}',
        text:`Hi {Name}

        I sent you an email a while ago about {company name} and how I think we could be a great fit for you and {company}.
        
        Did you know that our clients report {a 43% increase} in {sales} when they use our {software}? We also offer {full training} and {a 20% discount}.
        
        If you’d like to hear about this in more detail, please let me know. I would happily spend 30 mins telling you everything you need to know.
        
        I look forward to your response.
        
        {Sign-off}`},
        {re: 'A gift for you and your company',
        text:`Hi {Name},

        I know how busy you must be managing your team and helping them increase {job function}. I sent you some information about {product or service} a while ago and I thought this might be a good time to give you a practical demonstration.
        
        I’ve {created/attached} a few guest {logins/free samples/vouchers} that you can use to {access/sample} {product or service}. Feel free to share these with your staff and colleagues. I’d be very interested to hear what they think of it.
        
        I would really like to have 30 mins of your time as I feel we can really add value to your [area of operations].
        
        Can we book a phone call or a meeting?
        
        {Sign-off}`}

    ]

    const eventTemplate = [
        {re: 'Details of confirmation',
        text:`Hi there,

        Thanks for registering for {Event Name}. We are looking forward to seeing you at
        
        Location: {address}
        
        Doors open at [date and time]
        
        Hashtag: {#hashtag}
        
        Please RSVP to [name] by [date].
        
        Hope to see you all there!
        
        {Sign-off}`},
        {re: 'Reminder: {Event name} in {x} days',
        text:`Hi {Name}

        It’s only {x} days left before {Event name}. We are so excited to see you there!
        
        Here is our agenda:
        
        Day 1:
        
        9:00am – 10:00am Registration
        
        10:00 am – 11:30 am {Speaker one}
        
        11:40 am – 2:30 pm {Speaker two}
        
        2:30 pm – 3:00 pm – coffee break
        
        3:00 pm – 4:00 pm open discussion with {Speaker Name}
        
        4:00 pm – 5:00 pm networking
        
        How to get:
        
        Address: {address}
        
        By car: {directions}
        
        By city transport: {bus}, {metro station}
        
        Parking info: We will have free parking for all attendees
        
        {Sign-off with contact details}
        
        `},
        {re: 'Thanks for attending {Event name}!',
        text:`Hi {Name}!

        Thanks for being a part of {Event name}! We hope that you enjoyed it as much as we did.
        
        We are really proud to have brought so many professionals in one place. Many ideas, trends and problems arose.
        
        Here you can find recorded speeches and photos to share.
        
        Mark your calendars for next {Event name and date}
        
        Sign up for news about future events!
        
        Best,
        
        {Sign-off}
        
        `}



    ]

    const productTemplate = [
        {re: '{Software name} announcement!',
        text:`Hi {Name}!

        We are super excited to announce our new {name of a digital product/service}.
        
        {1-liner description about the product and its function}
        
        During the past few months, we have been working really hard to improve our {product/service}, and we believe that {name of the offering} will help you enjoy your experience with {company} even more.
        
        So what is {offering} all about?
        
        {explain the purpose of your product or service, focusing on the features, add visuals}.
        
        {if applicable} You can download our app directly from the App Store or the &nbsp;Google Play Store.
        
        {CTA button}
        
        Happy testing!
        
        Best,
        
        {Sign-off}
        
        `},
        {re: '{Update title} is live!',
        text:`Hello {Name}!

        Our new, updated version of {product/service} is finally up and running!
        
        We made sure to {briefly explain what makes the updated version better than the previous one}.
        
        Ready to test the updated version?
        
        Click on the button below to get started!
        
        {CTA button}
        
        Best,
        
        [Sign-off]
        
        `},
        {re: '{Product name} announcement!',
        text:`Dear {Name},

        The new {product name} is finally available!
        
        What makes the {product name} different is {give an intro to the Product and say why your audience need it}
        
        You can order your {Product} directly from our store or find it {name of a platform}.
        
        {Add if applicable} The first 100 people that place an order will receive {an extra product/discount/free shipping/unique feature}.
        
        {CTA button}
        
        Best,
        
        {Sign-off}
        
        `},
        {re: '{Product or service name} announcement!',
        text:`
        Hello {name},

        We couldn’t be happier to welcome {Product or service} into the {company} family.
        
        But what is {product} actually? It’s a {short description of a product}. You may have heard about such solutions before, but we assure you that {Product} is one of a kind.
        
        Bold statement? Just look at this list of benefits that {product name} brings!
        
        {Benefit 1}
        
        {Benefit 2}
        
        {Benefit 3}
        
        Pretty convincing, huh? You have to test our [product/service] to learn about its full potential.
        
        {CTA button}
        
        Enjoy!
        
        Best,
        
        {Sign-off}
        
        `}


    ]

export const allTemplates = [linkTemplates,contentTemplates,digitalTemplate,colabTemplate,buisnessTemplate,latePaymentTemplate,meetingTemplate,salesTemplate,eventTemplate,productTemplate]