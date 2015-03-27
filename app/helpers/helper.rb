# include MD5 gem, should be part of standard ruby install
require 'digest/md5'

# get the email from URL-parameters or what have you and make lowercase

def signin(email)

  email_address = email.downcase

  # create the md5 hash
  hash = Digest::MD5.hexdigest(email_address)

  # compile URL which can be used in <img src="RIGHT_HERE"...
  return "http://www.gravatar.com/avatar/#{hash}"

end

