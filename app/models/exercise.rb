class Exercise < ApplicationRecord
    has_many :logs
    has_many :users, -> {distinct}, through: :logs
end
