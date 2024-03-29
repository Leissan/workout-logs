class User < ApplicationRecord
    has_secure_password

    has_many :logs
    has_many :exercises,  -> { distinct }, through: :logs

    validates :username, presence: true, uniqueness: true
end
