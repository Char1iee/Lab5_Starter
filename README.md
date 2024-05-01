# Lab 5 - Starter
Team member: Charlie Shang, Kris Chen

1. No, because to test the "message" feature, we need to have a user interact with another user, while unit test does not allow us to test a feature that needs interaction between individual components.
2. Yes, because "max message length" is a feature we can test individually that does not require interaction with other features. To do unit test for this feature, we can just have three cases. The first one is to try text a message under 80 characters. The second one is to text a message with exactly 80 characters. The last one is to text a message over 80 characters.