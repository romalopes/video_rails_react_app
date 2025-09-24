require 'rails_helper'

RSpec.describe "Api::V1::Posts", type: :request do
  describe "GET /api/v1/posts" do
    it "works! (now write some real specs)" do
      post = FactoryBot.create(:post)
      puts "\n\n\nPost.count: #{Post.count}\n\n\n"

      get api_v1_posts_path
      expect(response).to have_http_status(200)
      posts = JSON.parse(response.body)
      puts "posts: #{posts}"
      expect(posts["posts"][0]["title"]).to eq post.title # posts["posts"][0]["title"]
    end

    it "test show post" do
      # post = FactoryBot.create(:post)
      post = Post.create(title: "Post 1", body: "Body")
      # post = create(:post, title: "Post 1", body: "Body")
      # expect(dummy.age).to be >= 21
      puts "\n\n\nPost.count: #{Post.count}\n\n\n"

      get api_v1_post_path(id: 1)
      expect(response).to have_http_status(200)
      expect(response.parsed_body["title"]).to eq("Post 1")
    end
  end
end
