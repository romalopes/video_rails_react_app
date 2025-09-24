require 'rails_helper'

RSpec.describe "Posts", type: :system do
  before do
    driven_by(:rack_test)
  end

  # pending "add some scenarios (or delete) #{__FILE__}"
  it "test show post" do
    post = Post.create(title: "Post 1", body: "Body")
    # post = create(:post, title: "Post 1", body: "Body")
    # expect(dummy.age).to be >= 21
    puts "\n\n\nPost.count: #{Post.count}\n\n\n"

    visit api_v1_post_path(id: 1)
    expect(page).to have_content("Post 1")
    # click_link("Back")
    # expect(current_path).to eq(api_v1_posts_path)
  end
end
