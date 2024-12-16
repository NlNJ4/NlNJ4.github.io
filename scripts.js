async function ScrollToTopic(topicID) {
    const topic = document.getElementById(topicID);
    topic.scrollIntoView({behavior:"smooth",block:"center"});
}